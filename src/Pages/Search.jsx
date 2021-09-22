import React, { Component } from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import CreateCardAlbum from '../Components/CreateCardAlbum';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchArtist: '',
      loading: false,
      albunsData: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderCardAlbum = this.renderCardAlbum.bind(this);
    this.renderConditional = this.renderConditional.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      searchArtist: target.value,
    });
  }

  // ao clicar no botão, faz o pedido das informações para API, com base na informação de state.
  // E faz a alteração false/true de loading para renderizar "Carregando.." enquanto a resposta não chega.
  async handleClick() {
    const { searchArtist } = this.state;
    this.setState({
      loading: true,
    });
    const artistData = await searchAlbumsAPI(searchArtist);
    this.setState({
      loading: false,
      albunsData: artistData,
    });
  }

  // Função para manipular os valores da requisição e renderizar o album de músicas com base no nome dos artistas.
  // OBS: Foi criado um componente que recebe os dados da requisição e a utiliza para a montagem dos elementos com os dados.
  renderCardAlbum() {
    const { albunsData, searchArtist } = this.state;
    if (albunsData.length === 0) return <p>Nenhum álbum foi encontrado </p>;
    return (
      <div>
        <p>
          Resultado de álbuns de:
          {' '}
          {searchArtist}
        </p>
        { albunsData.map((album) => (
          <CreateCardAlbum
            key={ album.artistId }
            album={ album }
          />
        ))}
      </div>
    );
  }

  // função utilizada para renderizar o forms depois do carregamento dá página
  renderConditional() {
    const minChar = 2;
    const { searchArtist } = this.state;
    return (
      <form>
        <div data-testid="page-search">
          <h1>Search</h1>
          <input
            data-testid="search-artist-input"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ searchArtist.length < minChar }
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </div>
      </form>

    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Header />
        { loading ? <Loading /> : this.renderConditional()}
        { this.renderCardAlbum()}
      </div>
    );
  }
}

export default Search;
