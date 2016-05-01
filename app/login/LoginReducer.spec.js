const expect = require('chai').expect;
import * as Login from './LoginReducer';

describe('LoginReducer.js:', () => {

  describe('setUserName()', () => {
    it('Should return a valid dispatch object', () => {
      const expected = {
        type: 'SET_USER_NAME',
        name: 'Testing'
      };
      expect(Login.setUserName('Testing')).to.deep.equal(expected);
    });
  });

  describe('setUserID()', () => {
    it('Should return a valid dispatch object', () => {
      const expected = {
        type: 'SET_USER_ID',
        id: 1234
      };
      expect(Login.setUserID(1234)).to.deep.equal(expected);
    });
  });

  describe('setUserEmail()', () => {
    it('Should return a valid dispatch object', () => {
      const expected = {
        type: 'SET_USER_EMAIL',
        email: 'test@user.com'
      };
      expect(Login.setUserEmail('test@user.com')).to.deep.equal(expected);
    });
  });

  describe('setUserProfileImage()', () => {
    it('Should return a valid dispatch object', () => {
      const expected = {
        type: 'SET_USER_PROFILE_IMAGE',
        profileImage: 'http://a.b.com'
      };
      expect(Login.setUserProfileImage('http://a.b.com')).to.deep.equal(expected);
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
        id: null,
        name: null,
        profileImage: null
      };
      expect(Login.LoginReducer(undefined, {})).to.deep.equal(expected);
    });

    it('Should respond correctly to SET_USER_NAME action', () => {
      const expected = {
        email: null,
        id: null,
        name: 'Testing',
        profileImage: null
      };
      expect(Login.LoginReducer(undefined, Login.setUserName('Testing'))).to.deep.equal(expected);
    });

    it('Should respond correctly to SET_USER_ID action', () => {
      const expected = {
        email: null,
        id: 1234,
        name: null,
        profileImage: null
      };
      expect(Login.LoginReducer(undefined, Login.setUserID(1234))).to.deep.equal(expected);
    });

    it('Should respond correctly to SET_USER_EMAIL action', () => {
      const expected = {
        email: 'test@user.com',
        id: null,
        name: null,
        profileImage: null
      };
      expect(Login.LoginReducer(undefined, Login.setUserEmail('test@user.com'))).to.deep.equal(expected);
    });

    it('Should respond correctly to SET_USER_PROFILE_IMAGE action', () => {
      const expected = {
        email: null,
        id: null,
        name: null,
        profileImage: 'http://a.b.com'
      };
      expect(Login.LoginReducer(undefined, Login.setUserProfileImage('http://a.b.com'))).to.deep.equal(expected);
    });

    it('Should be able to set multiple fields sequentially', () => {
      const expected = {
        email: null,
        id: 1234,
        name: 'Testing',
        profileImage: null
      };
      const newState = Login.LoginReducer(undefined, Login.setUserID(1234));
      expect(Login.LoginReducer(newState, Login.setUserName('Testing'))).to.deep.equal(expected);
    });

    it('Should respond correctly to RESET_USER action', () => {
      const expected = {
        email: null,
        id: null,
        name: null,
        profileImage: null
      };
      expect(Login.LoginReducer(undefined, Login.resetUser())).to.deep.equal(expected);
    });
  });

});
