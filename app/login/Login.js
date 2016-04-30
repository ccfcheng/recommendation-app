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
import { FIREBASE_URL } from '../appConstants';

const LoginContainer = React.createClass({
  // mixins: [ReactFireMixin],

  onLogin: function() {
    const { dispatch } = this.props;
    const ref = new Firebase(FIREBASE_URL);
    const usersRef = ref.child('users');
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        const {
          displayName,
          email,
          profileImageURL,
        } = authData.facebook;
        const id = authData.uid;
        dispatch(setUserEmail(email));
        dispatch(setUserID(id));
        dispatch(setUserName(displayName));
        dispatch(setUserProfileImage(profileImageURL));
        usersRef.child(id).set({displayName, email, profileImageURL});
      }
    });
  },

  render: function() {
    return (
      <Login onLogin={this.onLogin} />
    );
  }
});

const Login = React.createClass({
  render: function() {
    return (
      <div>
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
