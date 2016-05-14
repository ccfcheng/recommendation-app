const initialState = {
  createdAt: '',
  email: '',
  firstName: '',
  lastName: '',
  profileImage: '',
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return Object.assign(
        {},
        state,
        {createdAt: action.createdAt},
        {email: action.email},
        {firstName: action.firstName},
        {lastName: action.lastName},
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
// }
export const setUserProfile = (profile) => {
  return Object.assign({}, profile, {type: 'SET_USER_PROFILE'});
};

export const resetUser = () => {
  return {type: 'RESET_USER'};
};
