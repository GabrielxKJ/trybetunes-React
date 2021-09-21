import React, { Component } from 'react';
import Header from '../Components/Header';

class Album extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-album">
          <h4>Album</h4>
        </div>
      </>
    );
  }
}

export default Album;
