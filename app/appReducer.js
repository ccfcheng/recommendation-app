const initialState = {
  path: '',
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PATH':
      return Object.assign(
        {},
        state,
        {path: action.path}
      );
    default:
      return state;
  }
}

export const setPath = (path) => {
  return Object.assign({}, {path}, {type: 'SET_PATH'});
};
