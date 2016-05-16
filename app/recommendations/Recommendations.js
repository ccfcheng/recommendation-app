import React, { Component } from 'react';
import { connect } from 'react-redux';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import DetailContainer from '../detail/Detail';

class RecommendationsContainer extends Component {
  // TODO: Need a function that maps over results in props, and enriches the
  // results in case a necessary field for Details view is missing from data
  
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
          top={0}
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

        {this.props.results.map((business) => {
          return (
            <DetailContainer
              key={business.id}
              business={business}
            />
          );
        })}

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
    height: '80px',
    padding: '10px',
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
