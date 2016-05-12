const expect = require('chai').expect;
import * as Login from './LoginReducer';
import LoginReducer from './LoginReducer';

describe('LoginReducer.js:', () => {

  describe('setUserProfile()', () => {
    it('Should return a valid dispatch object', () => {
      const profile = {
        createdAt: 'May 6, 2016',
        email: 'test@gmail.com',
        firstName: 'test',
        lastName: 'user',
        profileImage: 'http://a.b.com',
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
        createdAt: '',
        email: '',
        firstName: '',
        lastName: '',
        profileImage: '',
      };
      expect(LoginReducer(undefined, {})).to.deep.equal(expected);
    });

    it('Should respond correctly to SET_USER_PROFILE action', () => {
      const expected = {
        createdAt: '',
        email: '',
        firstName: 'test',
        lastName: 'user',
        profileImage: '',
      };
      const profile = {
        createdAt: '',
        email: '',
        firstName: 'test',
        lastName: 'user',
        profileImage: '',
      };
      expect(LoginReducer(undefined, Login.setUserProfile(profile))).to.deep.equal(expected);
    });

    it('Should respond correctly to RESET_USER action', () => {
      const expected = {
        createdAt: '',
        email: '',
        firstName: '',
        lastName: '',
        profileImage: '',
      };
      expect(LoginReducer(undefined, Login.resetUser())).to.deep.equal(expected);
    });
  });

});
