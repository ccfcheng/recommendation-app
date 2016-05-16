import 'whatwg-fetch';
import { SEARCH_ENDPOINT } from '../appConstants';
import {
  setLoadingStatus,
  setLocalRecs,
} from './YelpReducer';
import url from 'url';

const makeYelpURL = (queryObj) => {
  // Include these fields by default
  const defaults = {
    // Default 5 mile search, can override in queryObj
    radius_filter: 8000,
    // 1=Distance, 2=Highest Rated
    // Use 0 if I eventually scrape all results in an area
    sort: 1,
  };
  const query = Object.assign({}, defaults, queryObj);

  const yelpURL = url.format({
    slashes: true,
    host: url.parse(window.location.href).host,
    pathname: SEARCH_ENDPOINT,
    query,
  });

  return yelpURL;
};

const makeYelpRequest = (yelpURL) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json'
    }),
    mode: 'cors'
  };
  return new Request(yelpURL, options);
};

export const geoPromise = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      {enableHighAccuracy: false, timeout: 7000, maximumAge: 0}
    );
  });
};

// fetchYelp(searchObj) takes a searchObj and returns a promise that resolves
// to a JSON object with the yelp response using default search params
const fetchYelp = (searchObj) => {
  const queryObj = {
    ll: searchObj.latitude + ',' + searchObj.longitude,
    term: searchObj.term,
  };
  const yelpURL = makeYelpURL(queryObj);
  const request = makeYelpRequest(yelpURL);
  return fetch(request)
    .then((res) => res.json())
    .catch((err) => err);
};

export const fetchLocal = (obj) => (dispatch, getState) => {
  dispatch(setLoadingStatus(true));
  const state = getState();
  const latitude = state.search.latitude;
  const longitude = state.search.longitude;
  const term = 'restaurants';
  // Use defauts or passed in value
  const searchObj = obj || { latitude, longitude, term };
  return fetchYelp(searchObj)
    .then((resData) => {
      if (resData.businesses) {
        dispatch(setLocalRecs(resData.businesses));
      }
      dispatch(setLoadingStatus(false));
    })
    .catch(() => {
      dispatch(setLoadingStatus(false));
    });

};
