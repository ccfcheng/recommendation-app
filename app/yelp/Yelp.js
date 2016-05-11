import 'whatwg-fetch';
import { YELP_SEARCH_ENDPOINT } from '../appConstants';
import {
  setLoadingStatus,
  setLocalRecs,
} from './YelpReducer';

const makeYelpQuery = (queryObj) => {
  // Include these fields by default
  const defaults = {
    // Always search restaurants
    term: 'restaurants',
    // Default 5 mile search, can override in queryObj
    radius_filter: 8000,
    // 1=Distance, 2=Highest Rated
    // Use 0 if I eventually scrape all results in an area
    sort: 2,
  };
  const query = Object.assign({}, defaults, queryObj);

  let stringArr = [], param;
  for (let key in query) {
    if (Array.isArray(query[key])) {
      param = key + '=' + encodeURIComponent(query[key].join(','));
    } else {
      param = key + '=' + encodeURIComponent(query[key]);
    }
    stringArr.push(param);
  }
  return stringArr.join('&');
};

const makeYelpRequest = (queryString) => {
  const headers = new Headers({
    'Accept': 'application/json'
  });

  const options = {
    method: 'GET',
    headers: headers,
    mode: 'cors'
  };

  const url = YELP_SEARCH_ENDPOINT + queryString;
  return new Request(url, options);

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

export const localSearch = () => (dispatch, getState) => {
  console.log('starting localSearch()');
  dispatch(setLoadingStatus(true));
  return geoPromise().then((geo) => {
    console.log('geocoordinates received, starting yelp query');
    const lat = geo.coords.latitude;
    const lng = geo.coords.longitude;
    const queryObj = {ll: [lat, lng]};
    const query = makeYelpQuery(queryObj);
    const request = makeYelpRequest(query);

    return fetch(request)
      .then((res) => res.json())
      .then((resData) => {
        console.log('fetch data:', resData);
        dispatch(setLocalRecs(resData.businesses));
        dispatch(setLoadingStatus(false));
        console.log('current redux state:', getState());
      })
      .catch((err) => console.warn('fetch error:', err));

  }).catch((err) => console.warn('geolocation error:', err));
};
