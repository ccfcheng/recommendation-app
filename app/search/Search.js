import React, { Component } from 'react';

export default class SearchContainer extends Component {
  render() {
    return (
      <Search/>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <div style={styles.content}>
        <h1>Search Screen</h1>
      </div>
    );
  }
}

const styles = {
  content: {
    marginTop: '54px',
  },
};
