import React, { Component } from 'react';
import Header from '../Components/Header';

class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile">
          <h4>Profile</h4>
        </div>
      </>
    );
  }
}

export default Profile;
