import Firebase from 'firebase';
import { FIREBASE_URL, USERS_URL } from '../appConstants';
import {
  resetUser,
  setUserEmail,
  setUserID,
  setUserName,
  setUserProfileImage,
} from '../login/LoginReducer';

const ref = new Firebase(FIREBASE_URL);
const usersRef = new Firebase(USERS_URL);

export const loginUser = (token) => (dispatch, getState) => {
  const auth = ref.getAuth();
  if (auth === null) {
    console.log('not logged in');
    ref.authWithOAuthToken('facebook', token, (error, authData) => {
      if (error) {
        console.log('Login with Facebook token failed');
      } else {
        console.log('authData:', authData);
        dispatchProfile(authData, dispatch);
      }
    });
  } else {
    console.log('already logged in:');
    dispatchProfile(auth, dispatch);
  }
  console.log('current redux state:', getState());
};

const dispatchProfile = (authData, dispatch) => {
  const {
      displayName,
      email,
      profileImageURL,
    } = authData.facebook;
  const uid = authData.uid;
  dispatch(setUserEmail(email));
  dispatch(setUserID(uid));
  dispatch(setUserName(displayName));
  dispatch(setUserProfileImage(profileImageURL));
  createUserIfNeeded(authData);
};
// createUserIfNeeded checks if user has been registered in Firebase
// if not, creates the user, otherwise, does nothing
const createUserIfNeeded = (authData) => {
  const {
    displayName,
    email,
    profileImageURL,
  } = authData.facebook;

  const uid = authData.uid;

  usersRef.child(uid).once('value', (data) => {
    if (data.val() === null) {
      usersRef.child(uid).set({displayName, email, profileImageURL});
    }
  });
};

// logoutUser resets redux state and sends unauth message to Firebase
export const logoutUser = () => (dispatch) => {
  dispatch(resetUser());
  ref.unauth();
};
