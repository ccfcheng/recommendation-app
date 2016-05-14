const initialState = {
  latitude: null,
  longitude: null,
  category: null,
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
    case 'SET_SEARCH_CATEGORIES':
      return Object.assign(
        {},
        state,
        {category: action.category}
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

export const setSearchCategories = (category) => {
  return Object.assign({}, {category}, {type: 'SET_SEARCH_CATEGORIES'});
};

export const setCoordsStatus = (haveCoords) => {
  return Object.assign({}, {haveCoords}, {type: 'SET_COORDS_STATUS'});
};
