import React from 'react';
import Loading from './Loading';

class MusicCard extends React.Component {
  render() {
    const { musicList } = this.props;
    const capa = musicList[0];
    const musicsInfo = musicList.slice(1);
    if (musicList.length === 0) return <Loading />;
    return (
      <div>
        <h2 data-testid="artist-name">{ capa.artistName }</h2>
        <h3 data-testid="album-name">{capa.collectionName }</h3>
        {musicsInfo.map((musics) => (
          <div key={ musics.trackId }>
            <h2
              key={ musics.trackId }
            >
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
          </div>
        ))}
      </div>
    );
  }
}

export default MusicCard;
