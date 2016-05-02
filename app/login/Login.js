import Firebase from 'firebase';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  setUserEmail,
  setUserID,
  setUserName,
  setUserProfileImage,
} from './LoginReducer';
import { FIREBASE_URL, SPLASH_URL } from '../appConstants';
import { checkAuth } from '../auth/AuthFacebook';

const LoginContainer = React.createClass({

  render: function() {
    return (
      <Login onLogin={() => this.props.dispatch(checkAuth())} />
    );
  }
});

const styles = {
  splash: {
    backgroundImage: 'url(' + SPLASH_URL + ')',
    width: '320',
    height: '568',
    margin: '0',
    padding: '0',
    backgroundSize: 'cover',
  },
  button: {

  }
};

const Login = React.createClass({
  render: function() {
    return (
      <div style={styles.splash}>
        <h1>Login Screen</h1>
        <Link to="/recommendations">
          <div onClick={this.props.onLogin}>
            Firebase FB Sign In
          </div>
        </Link>
      </div>
    );
  }

});

export default connect()(LoginContainer);

