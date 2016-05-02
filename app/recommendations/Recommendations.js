import Firebase from 'firebase';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { FIREBASE_URL } from '../appConstants';
import { logoutUser } from '../auth/AuthFacebook';

const RecommendationsContainer = React.createClass({

  render: function() {
    return (
      <Recommendations
        onClick={() => this.props.dispatch(logoutUser())}
      />
    );
  }
});

const Recommendations = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Main Screen - Recommendations Feed</h1>
        <ul>
          <li><Link to="/search">Search for Restaurants</Link></li>
          <li><Link to="/history">See Restaurant History</Link></li>
          <li><Link to="/profile">View Profile</Link></li>
          <li><Link onClick={this.props.onClick} to="/">Sign Out</Link></li>
        </ul>
      </div>
    );
  }
});

export default connect()(RecommendationsContainer);
