// import RaisedButton from 'material-ui/RaisedButton';
// import FontIcon from 'material-ui/FontIcon';
import React, { Component } from 'react';
import FBLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { SPLASH_URL3 } from '../appConstants';
import { loginUser } from '../auth/AuthFacebook';

class LoginContainer extends Component{
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(authData) {
    const token = authData.accessToken;
    this.props.dispatch(loginUser(token));
  }

  render() {
    return (
      <Login onLogin={this.onLogin} />
    );
  }
}

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
    width: '204px',
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
              <FBLogin
                appId="120536275017205"
                autoLoad={false}
                callback={this.props.onLogin}
              />
            </Link>
          </div>

        </div>

      </div>
    );
  }

}

export default connect()(LoginContainer);

