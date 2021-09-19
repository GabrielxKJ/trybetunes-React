import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contents from './Components/Contents';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Contents />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
