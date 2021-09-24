import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class MusicCard extends React.Component {
  verifyCheck = (songs) => {
    const { favoriteMusic } = this.props;
    const someMusic = favoriteMusic.some((track) => track.trackId === songs);
    if (someMusic) return true;
    if (!someMusic) return false;
  }

  render() {
    const { musicList, favoriteClick } = this.props;
    const capa = musicList[0];
    const musicsInfo = musicList.slice(1);

    if (musicList.length === 0) return <Loading />;
    return (
      <div>
        <h2 data-testid="artist-name">{ capa.artistName }</h2>
        <h3 data-testid="album-name">{ capa.collectionName }</h3>
        {
          musicsInfo.map((musics) => (
            <div key={ musics.trackId }>
              <h2>
                {musics.trackName}
              </h2>
              <audio
                data-testid="audio-component"
                src={ musics.previewUrl }
                controls
              >
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
              </audio>
              <label htmlFor={ musics.trackId }>
                {' '}
                Favorita
                <input
                  type="checkbox"
                  data-testid={ `checkbox-music-${musics.trackId}` }
                  onClick={ favoriteClick }
                  defaultChecked={ this.verifyCheck(musics.trackId) }
                  value={ musics.trackId }
                  id={ musics.trackId }
                />
              </label>
            </div>
          ))
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicList: PropTypes.arrayOf(PropTypes.object).isRequired,
  favoriteMusic: PropTypes.arrayOf(PropTypes.object).isRequired,
  favoriteClick: PropTypes.func.isRequired,
};

// musics: PropTypes.arrayOf(PropTypes.object).isRequired,
//   musicasFavoritas: PropTypes.string.isRequired,
//   onclick: PropTypes.func.isRequired,

export default MusicCard;
