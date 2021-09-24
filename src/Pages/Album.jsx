import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../Components/MusicCard';
import Loading from '../Components/Loading';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      musicList: [],
      loading: false,
      favoriteMusic: [],
    };

    this.callMusic = this.callMusic.bind(this);
    this.favoriteClick = this.favoriteClick.bind(this);
  }

  componentDidMount() {
    this.callMusic();
  }

  async callMusic() {
    const { match } = this.props;
    const { id } = match.params;
    const findMusic = await getMusics(id);
    this.setState({
      musicList: findMusic,
    });
  }

  async favoriteClick(event) {
    const { musicList, favoriteMusic } = this.state;
    this.setState({
      loading: true,
    });
    const favoriteId = Number(event.target.value);
    const favoriteSongs = musicList.find((musica) => musica.trackId === favoriteId);
    const checkValue = event.target.checked;
    if (checkValue) {
      await addSong(favoriteSongs);
      this.setState((prevState) => ({
        loading: false,
        favoriteMusic: [...prevState.favoriteMusic, favoriteSongs],
      }));
    }
    if (!checkValue) {
      const remove = favoriteMusic.filter((outFavorite) => outFavorite
        .trackId === favoriteId);
      await removeSong(favoriteSongs);
      this.setState({
        loading: false,
        favoriteMusic: remove,
      });
    }
  }

  render() {
    const { musicList, loading, favoriteMusic } = this.state;
    console.log(favoriteMusic);
    return (
      <>
        <Header />
        <div data-testid="page-album">
          { loading ? <Loading /> : <MusicCard
            musicList={ musicList }
            favoriteClick={ this.favoriteClick }
            favoriteMusic={ favoriteMusic }
          /> }
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Album;
