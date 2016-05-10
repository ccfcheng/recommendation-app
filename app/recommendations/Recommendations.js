import React, { Component } from 'react';
import { localSearch } from '../yelp/Yelp';
import { connect } from 'react-redux';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class RecommendationsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(localSearch());
  }

  render() {
    if (this.props.isLoading) {
      return (
        <LoadingSpinner isLoading={this.props.isLoading}/>
      );
    } else {
      return (
        <Recommendations results={this.props.results}/>
      );
    }
  }
}

class LoadingSpinner extends Component {
  render() {
    return (
      <div style={styles.container}>
        <RefreshIndicator
          size={80}
          left={0}
          top={20}
          status={this.props.isLoading ? 'loading' : 'hide'}
          style={styles.refresh}
        />
      </div>
    );
  }
}

class Recommendations extends Component {
  render() {
    return (
      <div style={styles.content}>

        <h1>Recommendations Screen</h1>

        <ol>
          {this.props.results.map((business) => {
            return <li key={business.id}>{business.name}</li>;
          })}
        </ol>

      </div>

    );
  }
}

const styles = {
  content: {
    marginTop: '54px',
  },

  container: {
    position: 'relative',
    width: '80px',
    margin: 'auto',
    marginTop: '54px',
  },

  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

function mapStateToProps(state) {
  return {
    isLoading: state.yelp.isLoading,
    results: state.yelp.localRecs,
  };
}

export default connect(mapStateToProps)(RecommendationsContainer);
