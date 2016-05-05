import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
  render() {
    return (
      <Profile
        id={this.props.id}
        email={this.props.email}
        name={this.props.name}
        image={this.props.profileImage}
      />
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <div style={styles.content}>

        <h1>User Profile</h1>
        <div>
          <img src={this.props.image}/>
        </div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.email}</h3>
        <h4>{this.props.id}</h4>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email,
    id: state.user.id,
    name: state.user.name,
    profileImage: state.user.profileImage,
  };
};

export default connect(mapStateToProps)(ProfileContainer);

const styles = {
  content: {
    marginTop: '54px',
  },
};
