import React, { Component } from 'react';
import Header from '../Components/Header';

class Favorites extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-favorites">
          <h4>Favorites</h4>
        </div>
      </>
    );
  }
}

export default Favorites;
