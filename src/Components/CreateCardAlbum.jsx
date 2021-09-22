import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CreateCardAlbum extends React.Component {
  render() {
    const { album } = this.props;
    const { collectionId, artworkUrl100, artistName, collectionName } = album;
    return (
      <div>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <img src={ artworkUrl100 } alt={ collectionId } />
          <h3>{artistName}</h3>
          <h3>{collectionName}</h3>
        </Link>
      </div>

    );
  }
}

export default CreateCardAlbum;

CreateCardAlbum.propTypes = {
  album: PropTypes.arrayOf(PropTypes.object).isRequired,
};
