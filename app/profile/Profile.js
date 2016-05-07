import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';

class ProfileContainer extends Component {
  render() {
    return (
      <Profile
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
          {firstName} {lastName}
        </div>

        <div style={styles.email}>
          {email}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    profileImage: state.user.profileImage,
  };
};

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
    fontStyle: 'italic',
  },

  image: {
    padding: '1em 0em',
  }
};
