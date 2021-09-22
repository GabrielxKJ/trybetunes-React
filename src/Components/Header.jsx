import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: true,
    };
    this.requestUser = this.requestUser.bind(this);
    this.renderUser = this.renderUser.bind(this);
  }

  // renderizar a função apenas quando a pagina toda
  componentDidMount() {
    this.requestUser();
  }

  // componentDidUpdate() {
  //   this.requestUser();
  // }

  async requestUser() {
    const user = await getUser();
    const { name } = user;
    if (name) {
      this.setState({
        userName: name,
        loading: false,
      });
    }
  }

  renderUser() {
    const { userName } = this.state;
    return <p data-testid="header-user-name">{ userName }</p>;
  }

  render() {
    const { loading } = this.state;
    return (
      <header data-testid="header-component">
        {(loading) ? <Loading /> : this.renderUser() }
        <nav>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
