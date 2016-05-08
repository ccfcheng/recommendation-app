import Firebase from 'firebase';
// import { FIREBASE_URL, USERS_URL } from '../appConstants';

// Use `import Database from '../database/Database'` to use
// Instantiate with `const DB = new Database(FIREBASE_URL)`
export default class Database {
  // Constructor sets refs to Firebase structure
  constructor(firebase_url) {
    this.firebase_url = firebase_url;
    this.ref = new Firebase(firebase_url);
    // this.usersRef = this.ref.child('users');
    // this.favoritesRef = this.ref.child('favorites');
  }

  // INSTANCE METHODS FOR CLASS

  // login(provider) starts OAuth process for the specified provider
  // returns a promise that resolves to the auth data
  login(provider) {
    return this.ref.authWithOAuthPopup(provider)
      .then((authData) => {
        return authData;
      })
      .catch((error) => {
        // TODO: Add other error handling
        console.warn('login(): User could not log in');
        return error;
      });
  }

  // logout() unauthenticates the user from the Firebase ref
  logout() {
    this.ref.unauth();
  }

  // profile() returns the profile data for the authenticated user
  profile() {
    const authData = this.ref.getAuth();
    if (authData) {
      return authData;
    } else {
      // TODO: Add other error handling
      console.warn('profile(): User not logged in');
      return;
    }
  }

  // set(dataObj, ...fields) is a generic setter function, writes the info in
  // the dataObj to the path specified by the fields string arguments
  set(dataObj, ...fields) {
    const url = this.firebase_url + '/' + fields.join('/');
    const newRef = new Firebase(url);
    newRef.set(dataObj);
  }

  // get(...fields) is a generic getter function, returns a promise that resolves
  // to the data stored at the path specified by the fields string arguments
  get(...fields) {
    const url = this.firebase_url + '/' + fields.join('/');
    const newRef = new Firebase(url);
    return newRef.once('value')
      .then((data) => data.val())
      .catch((error) => console.warn(error));
  }

}
