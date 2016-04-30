import React, { Component } from 'react';
import FBLogin from 'react-facebook-login';
import { Link } from 'react-router';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Screen</h1>
        <Link to="/recommendations">
          <FBLogin
            appId="120536275017205"
            autoLoad={false}
            scope={"public_profile"}
            callback={(e) => {console.log(e)}}
          />
        </Link>
      </div>
    );
  }
}
