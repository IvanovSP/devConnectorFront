import makeActionCreator from '../../utils/makeActionCreator';

export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const setLoginError = makeActionCreator(SET_LOGIN_ERROR, 'err');

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const requestLogin = makeActionCreator(REQUEST_LOGIN, 'email', 'password');

export const SET_IS_SIGNEDIN = 'SET_IS_SIGNEDIN';
export const setIsSignedIn = makeActionCreator(SET_IS_SIGNEDIN, 'isSignedIn');
