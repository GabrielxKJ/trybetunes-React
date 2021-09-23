import React, { Component } from 'react';
import Header from '../Components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../Components/MusicCard';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      musicList: [],
    };

    // this.callMusic = this.callMusic.bind(this);
  }

  componentDidMount() {
    this.callMusic();
  }

  callMusic = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const findMusic = await getMusics(id);
    this.setState({
      musicList: findMusic,
    });
    console.log(findMusic, 'find');
    console.log(id, 'id');
  }

  render() {
    const { musicList } = this.state;
    console.log(musicList, 'musicList');
    return (
      <>
        <Header />
        <div data-testid="page-album">
          <MusicCard musicList={ musicList } />
        </div>
      </>
    );
  }
}

export default Album;
