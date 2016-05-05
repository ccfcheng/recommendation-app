import React, { Component } from 'react';

export default class RecommendationsContainer extends Component {
  render() {
    return (
      <Recommendations/>
    );
  }
}

class Recommendations extends Component {
  render() {
    return (
      <div style={styles.content}>
        <h1>Recommendations Screen</h1>
      </div>
    );
  }
}

const styles = {
  content: {
    marginTop: '54px',
  },
};
