import Firebase from 'firebase';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  setUserEmail,
  setUserID,
  setUserName,
  setUserProfileImage,
} from './LoginReducer';
import { FIREBASE_URL, SPLASH_URL3 } from '../appConstants';
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
    background: 'url(' + SPLASH_URL3 + ') no-repeat center center',
    minHeight: '100vh',
    backgroundSize: 'cover',
  },

  title: {
    textAlign: 'center',
    textShadow: '5px 5px 8px black',
    fontSize: '2em',
    color: 'white',
    marginBottom: '1.5em',
  },

  subtitle: {
    textAlign: 'center',
    textShadow: '3px 3px 5px black',
    fontSize: '1em',
    color: 'white',
    marginBottom: '1em',
    fontStyle: 'italic',
    width: '80%',
    margin: '0em auto 1.5em',
  },

  centered: {
    margin: 'auto',
    position: 'absolute',
    top: '12em',
    left: '0px',
    bottom: '0px',
    right: '0px',
  },

  button: {
    margin: 'auto',
    width: '222px',
  }
};

const Login = React.createClass({
  render: function() {
    return (
      <div style={styles.splash}>

        <div style={styles.centered}>

          <div style={styles.title}>
            Flavor Finder
          </div>

          <div style={styles.subtitle}>
            Your personalized restaurant recommendations... only one click away!
          </div>

          <div style={styles.button}>
            <Link to="/recommendations">
              <RaisedButton
                onClick={this.props.onLogin}
                label="login with facebook"
                backgroundColor="#3b5998"
                labelColor="#ffffff"
                icon={<FontIcon className="fa fa-facebook-official"/>}
              />
            </Link>
          </div>

        </div>

      </div>
    );
  }

});

export default connect()(LoginContainer);

