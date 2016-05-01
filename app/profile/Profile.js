import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const ProfileContainer = React.createClass({
  render: function() {
    return (
      <Profile
        id={this.props.id}
        email={this.props.email}
        name={this.props.name}
        image={this.props.profileImage}
      />
    );
  }
});

const Profile = React.createClass({
  render: function() {
    return (
      <div>
        <h1>User Profile</h1>
        <div>
          <img src={this.props.image}/>
        </div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.email}</h3>
        <h4>{this.props.id}</h4>
        <ul>
          <li><Link to="/recommendations">Go back to Recommendations</Link></li>
        </ul>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    email: state.user.email,
    id: state.user.id,
    name: state.user.name,
    profileImage: state.user.profileImage,
  };
}

export default connect(mapStateToProps)(ProfileContainer);
