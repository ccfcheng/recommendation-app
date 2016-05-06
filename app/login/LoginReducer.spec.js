const expect = require('chai').expect;
import * as Login from './LoginReducer';

describe('LoginReducer.js:', () => {

  describe('setUserProfile()', () => {
    it('Should return a valid dispatch object', () => {
      const profile = {
        email: 'test@gmail.com',
        firstName: 'test',
        lastName: 'user',
        profileImage: 'http://a.b.com',
        uid: 'facebook:12345',
      };
      const expected = Object.assign({}, profile, {type: 'SET_USER_PROFILE'});
      expect(Login.setUserProfile(profile)).to.deep.equal(expected);
    });
  });

  describe('resetUser()', () => {
    it('Should return a valid dispatch object', () => {
      const expected = {
        type: 'RESET_USER'
      };
      expect(Login.resetUser()).to.deep.equal(expected);
    });
  });

  describe('LoginReducer()', () => {
    it('Should have the correct initial state', () => {
      const expected = {
        email: null,
        firstName: null,
        lastName: null,
        profileImage: null,
        uid: null,
      };
      expect(Login.LoginReducer(undefined, {})).to.deep.equal(expected);
    });

    it('Should respond correctly to SET_USER_PROFILE action', () => {
      const expected = {
        email: null,
        uid: 'facebook:12345',
        firstName: 'test',
        lastName: 'user',
        profileImage: null,
      };
      const profile = {
        email: null,
        uid: 'facebook:12345',
        firstName: 'test',
        lastName: 'user',
        profileImage: null,
      };
      expect(Login.LoginReducer(undefined, Login.setUserProfile(profile))).to.deep.equal(expected);
    });

    it('Should respond correctly to RESET_USER action', () => {
      const expected = {
        email: null,
        firstName: null,
        lastName: null,
        profileImage: null,
        uid: null,
      };
      expect(Login.LoginReducer(undefined, Login.resetUser())).to.deep.equal(expected);
    });
  });

});
