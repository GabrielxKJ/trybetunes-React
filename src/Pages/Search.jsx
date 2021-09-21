import React, { Component } from 'react';
import Header from '../Components/Header';
// import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchArtist: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      searchArtist: target.value,
    });
  }

  render() {
    const { searchArtist } = this.state;
    const minChar = 2;
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <h1>Search</h1>
          <input
            data-testid="search-artist-input"
            value={ searchArtist }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ searchArtist.length < minChar }
          >
            Pesquisar
          </button>
        </div>
      </>
    );
  }
}

export default Search;
