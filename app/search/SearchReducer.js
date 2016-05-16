const initialState = {
  currentLatitude: null,
  currentLongitude: null,
  searchLatitude: null,
  searchLongitude: null,
  term: 'restaurants',
  haveCoords: false,
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_COORDS':
      return Object.assign(
        {},
        state,
        {currentLatitude: action.currentLatitude},
        {currentLongitude: action.currentLongitude}
      );
    case 'SET_SEARCH_COORDS':
      return Object.assign(
        {},
        state,
        {searchLatitude: action.searchLatitude},
        {searchLongitude: action.searchLongitude}
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

export const setCurrentCoords = (currentLatitude, currentLongitude) => {
  return Object.assign({}, {currentLatitude, currentLongitude}, {type: 'SET_CURRENT_COORDS'});
};

export const setSearchCoords = (searchLatitude, searchLongitude) => {
  return Object.assign({}, {searchLatitude, searchLongitude}, {type: 'SET_SEARCH_COORDS'});
};

export const setSearchTerms = (term) => {
  return Object.assign({}, {term}, {type: 'SET_SEARCH_TERMS'});
};

export const setCoordsStatus = (haveCoords) => {
  return Object.assign({}, {haveCoords}, {type: 'SET_COORDS_STATUS'});
};
