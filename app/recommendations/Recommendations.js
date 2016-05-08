import React, { Component } from 'react';
// import { DEV_YELP_SEARCH_ENDPOINT } from '../appConstants';
import { localSearch } from '../yelp/Yelp';
import { connect } from 'react-redux';

class RecommendationsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(localSearch());
  }

  render() {
    return (
      <Recommendations results={this.props.results}/>
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
};

function mapStateToProps(state) {
  return {
    results: state.yelp.localRecs,
  };
}

export default connect(mapStateToProps)(RecommendationsContainer);
