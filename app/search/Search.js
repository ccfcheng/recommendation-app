import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { findGeoCoords } from '../location/LocationAPI';
import fetchJsonp from 'fetch-jsonp';
import {
  fetchLocal,
} from '../yelp/Yelp';
import {
  setCoordsStatus,
  setSearchCoords,
} from '../search/SearchReducer';
import {
  AUTOCOMPLETE_ENDPOINT,
  GEOCODE_ENDPOINT,
} from '../appConstants';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autocomplete: [],
      selectedName: '',
      selectedCity: {
        name: '',
        latitude: null,
        longitude: null,
      },
      searchTerms: '',
    };
    this.onInput = this.onInput.bind(this);
    this.onCitySelect = this.onCitySelect.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onInput(event) {
    const input = event.target.value;
    this.setState({selectedName: input});
    const url = AUTOCOMPLETE_ENDPOINT + input;
    if (input.length >= 3) {
      return fetchJsonp(url)
        .then((res) => res.json())
        .then((autocomplete) => this.setState({autocomplete}))
        .catch((err) => err);
    } else {
      this.setState({autocomplete: []});
    }
  }

  onCitySelect(cityName) {
    const url = GEOCODE_ENDPOINT + cityName;
    return fetchJsonp(url)
      .then((res) => res.json())
      .then((details) => {
        let selectedCity = {};
        selectedCity.name = details.geobytesipaddress;
        selectedCity.latitude = details.geobyteslatitude;
        selectedCity.longitude = details.geobyteslongitude;
        this.setState({selectedCity, autocomplete: [], selectedName: selectedCity.name});
      })
      .catch((err) => err);
  }

  onSearchInput(event) {
    const input = event.target.value;
    this.setState({searchTerms: input});
  }
  // Runs when user hits the search button
  onSearch() {
    const { dispatch } = this.props;
    const latitude = Number(this.state.selectedCity.latitude);
    const longitude = Number(this.state.selectedCity.longitude);
    const term = this.state.searchTerms;
    const searchObj = {term, latitude, longitude};
    // If text fields are filled out, we can do this
    if (latitude && longitude && term !== '') {
      dispatch(fetchLocal(searchObj));
      browserHistory.push('/recommendations');
    }
  }
  // TODO: Runs when user hits the current location button
  onUseCurrentLocation() {
    const { dispatch } = this.props;
    return findGeoCoords()
      .then((coords) => {
        dispatch(setCoordsStatus(true));
        dispatch(setSearchCoords(coords.latitude, coords.longitude));
      })
      .catch(() => dispatch(setCoordsStatus(false)));
  }

  render() {
    return (
      <Search
        onInput={this.onInput}
        onCitySelect={this.onCitySelect}
        onSearchInput={this.onSearchInput}
        onSearch={this.onSearch}
        autocomplete={this.state.autocomplete}
        selectedName={this.state.selectedName}
      />
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO: Add a current location button in addition to location search
    // TODO: Turn search term field into category filter by toggles instead

    return (
      <div style={styles.content}>

        <TextField
          style={styles.textfields}
          hintText="Enter restaurant types"
          floatingLabelText="What are you looking for?"
          onChange={this.props.onSearchInput}
        />

        <TextField
          style={styles.textfields}
          hintText="Enter city or address"
          floatingLabelText="Find restaurants near..."
          onChange={this.props.onInput}
          value={this.props.selectedName}
        />

        {this.props.autocomplete.map((city) => {
          return (
            <div
              style={styles.cityName}
              key={city}
              onClick={() => {this.props.onCitySelect(city);}}
            >
              {city}
            </div>
          );
        })}

        <div style={styles.buttonContainer}>
          <RaisedButton
            label="Search Now"
            primary={true}
            style={styles.searchButton}
            onClick={this.props.onSearch}
          />
        </div>

      </div>
    );
  }
}

export default connect()(SearchContainer);

const styles = {
  content: {
    marginTop: '54px',
  },

  textfields: {
    margin: '10px',
  },

  cityName: {
    padding: '8px',
  },

  buttonContainer: {
    width: '130px',
    margin: '15px auto',
  },

  searchButton: {
    width: '130px',
  }
};
