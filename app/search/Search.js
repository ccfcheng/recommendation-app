import React, { Component } from 'react';
import { Link } from 'react-router';

const SearchContainer = React.createClass({
  render: function() {
    return (
      <Search/>
    );
  }
});

const Search = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Search Screen</h1>
        <ul>
          <li><Link to="/recommendations">Go back to Recommendations</Link></li>
        </ul>
      </div>
    );
  }
});

export default SearchContainer;
