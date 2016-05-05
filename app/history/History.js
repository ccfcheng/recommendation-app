import React, { Component } from 'react';

export default class HistoryContainer extends Component {
  render() {
    return (
      <History/>
    );
  }
}

class History extends Component {
  render() {
    return (
      <div style={styles.content}>
        <h1>History Screen</h1>
      </div>
    );
  }
}

const styles = {
  content: {
    marginTop: '54px',
  },
};
