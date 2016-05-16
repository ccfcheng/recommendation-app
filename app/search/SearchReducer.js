const initialState = {
  latitude: null,
  longitude: null,
  term: 'restaurants',
  haveCoords: false,
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SEARCH_COORDS':
      return Object.assign(
        {},
        state,
        {latitude: action.latitude},
        {longitude: action.longitude}
      );
    case 'SET_SEARCH_TERMS':
      return Object.assign(
        {},
        state,
        {term: action.term}
      );
    case 'SET_COORDS_STATUS':
      return Object.assign(
        {},
        state,
        {haveCoords: action.haveCoords}
      );
    default:
      return state;
  }
}

export const setSearchCoords = (latitude, longitude) => {
  return Object.assign({}, {latitude, longitude}, {type: 'SET_SEARCH_COORDS'});
};

export const setSearchTerms = (term) => {
  return Object.assign({}, {term}, {type: 'SET_SEARCH_TERMS'});
};

export const setCoordsStatus = (haveCoords) => {
  return Object.assign({}, {haveCoords}, {type: 'SET_COORDS_STATUS'});
};
