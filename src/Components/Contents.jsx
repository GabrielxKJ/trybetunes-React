import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from '../Pages/Album';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import ProfileEdit from '../Pages/Edit';
import Search from '../Pages/Search';
import Favorites from '../Pages/Favorites';
import NotFound from '../Pages/NotFound';

class Contents extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="/Favorites" component={ Favorites } />
        <Route path="" component={ NotFound } />
      </Switch>
    );
  }
}

export default Contents;
