import React, { Component } from 'react';
import { Link } from 'react-router';

const HistoryContainer = React.createClass({
  render: function() {
    return (
      <History/>
    );
  }
});

const History = React.createClass({
  render: function() {
    return (
      <div>
        <h1>History Screen</h1>
        <ul>
          <li><Link to="/recommendations">Go back to Recommendations</Link></li>
        </ul>
      </div>
    );
  }
});

export default HistoryContainer;
