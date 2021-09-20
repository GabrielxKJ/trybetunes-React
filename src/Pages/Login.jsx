import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../Components/Loading';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      loading: false,
      logged: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // função que salva o nome do usuário e a lógica do loading
  async handleClick() {
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name });
    this.setState({ loading: false, logged: true });
  }

  // sempre que definir um elemento de form, setar um função handle com os valores do estado para interagir com eles.
  handleChange({ target }) {
    this.setState({
      name: target.value,
    });
  }

  render() {
    const { loading, name, logged } = this.state;
    if (loading) {
      return <Loading />;
    }
    if (logged) {
      // Após a conclusão do carregamento a propriedade logged fica true e redireciona para a página Search.
      return <Redirect to="/search" />;
    }
    const minChar = 3;
    return (
      <div data-testid="page-login">
        <form action="submit">
          <input
            type="text"
            data-testid="login-name-input"
            value={ name }
            onChange={ this.handleChange }
          />

          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ name.length < minChar }
            data-testid="login-submit-button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
