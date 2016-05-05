import Firebase from 'firebase';
import { browserHistory } from 'react-router';
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

export const loginUser = () => (dispatch) => {
  const auth = ref.getAuth();
  if (auth === null) {
    ref.authWithOAuthPopup('facebook')
      .then((authData) => {
        // Save profile data in redux then route to home screen
        dispatchProfile(authData, dispatch);
        browserHistory.push('/home');
      })
      .catch(() => {
        // Add error handling in future, this can take an error parameter
      });
  } else {
    dispatchProfile(auth, dispatch);
    browserHistory.push('/home');
  }
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
