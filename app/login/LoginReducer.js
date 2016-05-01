const initialState = {
  email: null,
  id: null,
  name: null,
  profileImage: null,
};

export function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_NAME':
      return Object.assign({}, state, {name: action.name});
    case 'SET_USER_ID':
      return Object.assign({}, state, {id: action.id});
    case 'SET_USER_EMAIL':
      return Object.assign({}, state, {email: action.email});
    case 'SET_USER_PROFILE_IMAGE':
      return Object.assign({}, state, {profileImage: action.profileImage});
    case 'RESET_USER':
      return initialState;
    default:
      return state;
  }
}

export const setUserName = (name) => {
  return {type: 'SET_USER_NAME', name: name};
};

export const setUserID = (id) => {
  return {type: 'SET_USER_ID', id: id};
};

export const setUserEmail = (email) => {
  return {type: 'SET_USER_EMAIL', email: email};
};

export const setUserProfileImage = (profileImage) => {
  return {type: 'SET_USER_PROFILE_IMAGE', profileImage: profileImage};
};

export const resetUser = () => {
  return {type: 'RESET_USER'};
};
