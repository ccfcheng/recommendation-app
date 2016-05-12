import React, { Component } from 'react';
import { connect } from 'react-redux';
import Database from '../database/Database';
import { FIREBASE_URL } from '../appConstants';
import Avatar from 'material-ui/Avatar';
import { setUserProfile } from '../login/LoginReducer';

const DB = new Database(FIREBASE_URL);

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    // Grab user info from database, load into redux
    return DB.profile()
      .then((profile) => {
        this.props.dispatch(setUserProfile(profile));
      });

  }

  render() {
    return (
      <Profile
        createdAt={this.props.createdAt}
        email={this.props.email}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        profileImage={this.props.profileImage}
      />
    );
  }
}

class Profile extends Component {

  render() {
    const {
      createdAt,
      email,
      firstName,
      lastName,
      profileImage,
    } = this.props;

    return (
      <div style={styles.content}>

        <div style={styles.image}>
          <Avatar
            src={profileImage}
            size={100}
          />
        </div>

        <div style={styles.username}>
          {firstName + ' ' + lastName}
        </div>

        <div style={styles.email}>
          Contact: {email}
        </div>

        <div style={styles.createdAt}>
          Joined on {createdAt}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    createdAt: state.user.createdAt,
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    profileImage: state.user.profileImage,
  };
}

export default connect(mapStateToProps)(ProfileContainer);

const styles = {
  content: {
    marginTop: '54px',
    textAlign: 'center',
  },

  username: {
    padding: '0.5em 0em',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },

  email: {
    padding: '0.5em 0em',
    fontSize: '1em',
  },

  createdAt: {
    padding: '0.5em 0em',
    fontStyle: 'italic',
    fontSize: '0.75em',
  },

  image: {
    padding: '1em 0em',
  }
};
