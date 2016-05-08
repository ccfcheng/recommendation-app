const initialState = {
  localRecs: [],
  searchResults: [],
};

export default function YelpReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCAL_RECOMMENDATIONS':
      return Object.assign(
        {},
        state,
        {localRecs: action.localRecs}
      );
    case 'SET_SEARCH_RESULTS':
      return Object.assign(
        {},
        state,
        {searchResults: action.searchResults}
      );
    case 'RESET_RESULTS':
      return initialState;
    default:
      return state;
  }
}
// localRecs is an array of businesses from Yelp
export const setLocalRecs = (localRecs) => {
  // console.log('setLocalRecs called with:', localRecs);
  const result = Object.assign(
    {},
    {localRecs},
    {type: 'SET_LOCAL_RECOMMENDATIONS'}
  );
  // console.log('setLocalRecs will return:', result);
  return result;
};
// searchResults is an array of businesses from Yelp
export const setSearchResults = (searchResults) => {
  return Object.assign(
    {},
    {searchResults},
    {type: 'SET_SEARCH_RESULTS'}
  );
};

export const resetResults = () => {
  return {type: 'RESET_RESULTS'};
};
