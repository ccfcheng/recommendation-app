import React, { Component } from 'react';
import Database from '../database/Database';
import { FIREBASE_URL } from '../appConstants';
import Avatar from 'material-ui/Avatar';

const DB = new Database(FIREBASE_URL);

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: null,
      firstName: null,
      lastName: null,
      profileImage: null,
    };
  }

  componentWillMount() {
    const uid = DB.profile().uid;
    DB.get('users', uid).then((profile) => {
      const {
        createdAt,
        firstName,
        lastName,
        profileImage,
      } = profile;
      this.setState({createdAt, firstName, lastName, profileImage});
    });
  }

  render() {
    return (
      <Profile
        createdAt={this.state.createdAt}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        profileImage={this.state.profileImage}
      />
    );
  }
}

class Profile extends Component {

  render() {
    const {
      createdAt,
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

        <div style={styles.joined}>
          Joined on {createdAt}
        </div>

      </div>
    );
  }
}

export default ProfileContainer;

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

  joined: {
    fontStyle: 'italic',
    fontSize: '0.75em',
  },

  image: {
    padding: '1em 0em',
  }
};
