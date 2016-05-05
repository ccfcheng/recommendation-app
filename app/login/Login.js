import RaisedButton from 'material-ui/RaisedButton';
import ActionFace from 'material-ui/svg-icons/action/face';
import { cyan900, cyan300 } from 'material-ui/styles/colors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    background: 'radial-gradient(' + cyan900 + ',' + cyan300 + ')',
    minHeight: '100vh',
    backgroundSize: 'cover',
  },

  title: {
    textAlign: 'center',
    textShadow: '0.25em 0.25em 0.5em black',
    fontSize: '3em',
    color: 'white',
    marginBottom: '0.5em',
  },

  subtitle: {
    textAlign: 'center',
    textShadow: '0.125em 0.125em 0.25em black',
    fontSize: '1em',
    color: 'white',
    marginBottom: '1em',
    fontStyle: 'italic',
    width: '10em',
    margin: '0em auto 2em',
  },

  centered: {
    margin: 'auto',
    position: 'absolute',
    top: '9em',
    left: '0em',
    bottom: '0em',
    right: '0em',
  },

  buttonDiv: {
    margin: 'auto',
    width: '14.125em',
  },
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
            flavr
          </div>

          <div style={styles.subtitle}>
            Your custom flavor recommendations... only one click away!
          </div>

          <div style={styles.buttonDiv}>
            <RaisedButton
              label="Login with Facebook"
              labelPosition="after"
              labelColor="white"
              icon={<ActionFace/>}
              backgroundColor="#3b5998"
              onClick={this.props.onLogin}
            />
          </div>

        </div>

      </div>
    );
  }
}

export default connect()(LoginContainer);

