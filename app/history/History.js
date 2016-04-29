import React, { Component } from 'react';
import { Link } from 'react-router';

export default class History extends Component {
  render() {
    return (
      <div>
        <h1>History Screen</h1>
        <ul>
          <li><Link to="/recommendations">Go back to Recommendations</Link></li>
        </ul>
      </div>
    );
  }
}
