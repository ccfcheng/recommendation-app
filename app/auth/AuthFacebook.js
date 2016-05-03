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
  // If not logged in, call OAuth popup, grab uid and register user if needed
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
        usersRef.child(uid).once('value', (data) => {
          if (data.val() === null) {
            usersRef.child(uid).set({displayName, email, profileImageURL})
          } else {
          }
        });
        dispatch(setUserEmail(email));
        dispatch(setUserID(uid));
        dispatch(setUserName(displayName));
        dispatch(setUserProfileImage(profileImageURL));
      }
    });
  }
};

// logoutUser resets redux state and sends unauth message to Firebase
export const logoutUser = () => (dispatch, getState) => {
  dispatch(resetUser());
  ref.unauth();
};
