import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Screen</h1>
        <ul>
          <li><Link to="/recommendations">Sign In</Link></li>
        </ul>
      </div>
    );
  }
}
