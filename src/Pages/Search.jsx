import React, { Component } from 'react';
import Header from '../Components/Header';

class Search extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <h4>Search</h4>
        </div>
      </>
    );
  }
}

export default Search;
