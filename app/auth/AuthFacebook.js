import Firebase from 'firebase';
import { browserHistory } from 'react-router';
import { FIREBASE_URL, USERS_URL } from '../appConstants';
import { resetUser, setUserProfile } from '../login/LoginReducer';

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
  const email = authData.facebook.email;
  const firstName = authData.facebook.cachedUserProfile.first_name;
  const lastName = authData.facebook.cachedUserProfile.last_name;
  const profileImage = authData.facebook.profileImageURL;
  const uid = authData.uid;

  const profile = {email, firstName, lastName, profileImage, uid};
  dispatch(setUserProfile(profile));
  createUserIfNeeded(profile);
};
// createUserIfNeeded checks if user has been registered in Firebase
// if not, creates the user, otherwise, does nothing
const createUserIfNeeded = (profile) => {
  const {
    email,
    firstName,
    lastName,
    profileImage,
    uid,
  } = profile;

  usersRef.child(uid).once('value', (data) => {
    if (data.val() === null) {
      usersRef.child(uid).set({
        email: email || '',
        firstName: firstName || '',
        lastName: lastName || '',
        profileImage: profileImage || '',
      });
    }
  });
};

// logoutUser resets redux state and sends unauth message to Firebase
export const logoutUser = () => (dispatch) => {
  dispatch(resetUser());
  ref.unauth();
};
