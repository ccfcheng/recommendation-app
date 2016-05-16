import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPath } from '../appReducer';

class FavoritesContainer extends Component {
  componentWillMount() {
    this.props.dispatch(setPath('Favorites'));
  }

  render() {
    return (
      <Favorites/>
    );
  }
}

class Favorites extends Component {
  render() {
    return (
      <div style={styles.content}>
        <h1>Favorites Screen</h1>
      </div>
    );
  }
}

const styles = {
  content: {
    marginTop: '54px',
  },
};

export default connect()(FavoritesContainer);
