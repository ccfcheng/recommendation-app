import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <ul>
          <li><Link to="/recommendations">Go back to Recommendations</Link></li>
        </ul>
      </div>
    );
  }
}
