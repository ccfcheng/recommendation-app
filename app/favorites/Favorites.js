import React, { Component } from 'react';

export default class FavoritesContainer extends Component {
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
