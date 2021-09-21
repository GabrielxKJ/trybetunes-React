import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contents from './Components/Contents';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Contents />
      </BrowserRouter>
    );
  }
}

export default App;
