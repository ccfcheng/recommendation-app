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

// checkAuth() first queries Firebase to check auth status
// If logged in, grab user data from Firebase then dispatch to redux
export const checkAuth = () => (dispatch, getState) => {
  // If not logged in, call OAuth popup, grab uid and call isRegistered(uid)
  if (ref.getAuth() === null) {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        const {
          displayName,
          email,
          profileImageURL,
        } = authData.facebook;
        const uid = authData.uid;
        // Add user if not registered
        if(!isRegistered(uid)) {
          usersRef.child(uid).set({displayName, email, profileImageURL});
        }
        dispatch(setUserEmail(email));
        dispatch(setUserID(uid));
        dispatch(setUserName(displayName));
        dispatch(setUserProfileImage(profileImageURL));
        console.log('redux state:', getState());
      }
    });
  }
};

// isRegistered(uid) returns a boolean for whether user exists for uid
const isRegistered = (uid) => {
  const user = usersRef.child(uid);
  return user.once('value', (data) => {
    return data.val() !== null;
  });
};

// logoutUser resets redux state and sends unauth message to Firebase
export const logoutUser = () => (dispatch, getState) => {
  dispatch(resetUser());
  ref.unauth();
};
