import makeActionCreator from '../../utils/makeActionCreator';

export const GET_PROFILE_INFO = 'GET_PROFILE_INFO';
export const getProfileInfo = makeActionCreator(GET_PROFILE_INFO, 'userId');

export const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
export const setProfileInfo = makeActionCreator(SET_PROFILE_INFO, 'info');

export const SET_GIT_PROJECTS = 'SET_GIT_PROJECTS';
export const setGitProjects = makeActionCreator(SET_GIT_PROJECTS, 'projects');

export const GET_USER_NAME = 'GET_USER_NAME';
export const getUserName = makeActionCreator(GET_USER_NAME, 'name');

export const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
export const getSuggestions = makeActionCreator(GET_SUGGESTIONS, 'searchQuery', 'fieldName');

export const SET_SUGGESTIONS = 'SET_SUGGESTIONS';
export const setSuggestions = makeActionCreator(SET_SUGGESTIONS, 'suggestions', 'fieldName');
