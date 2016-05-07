const initialState = {
  email: null,
  firstName: null,
  lastName: null,
  profileImage: null,
  uid: null,
};

export function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return Object.assign(
        {},
        state,
        {email: action.email},
        {firstName: action.firstName},
        {lastName: action.lastName},
        {uid: action.uid},
        {profileImage: action.profileImage}
      );
    case 'RESET_USER':
      return initialState;
    default:
      return state;
  }
}

// Profile is an object in the following format:
// {
//   email: STRING,
//   firstName: STRING,
//   lastName: STRING,
//   profileImage: URL_STRING,
//   uid: STRING,
// }
export const setUserProfile = (profile) => {
  return Object.assign({}, profile, {type: 'SET_USER_PROFILE'});
};

export const resetUser = () => {
  return {type: 'RESET_USER'};
};
