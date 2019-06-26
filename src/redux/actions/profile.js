import makeActionCreator from '../../utils/makeActionCreator';

export const GET_PROFILE_INFO = 'GET_PROFILE_INFO';
export const getProfileInfo = makeActionCreator(GET_PROFILE_INFO, 'userId');

export const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
export const setProfileInfo = makeActionCreator(SET_PROFILE_INFO, 'info');

export const SET_GIT_PROJECTS = 'SET_GIT_PROJECTS';
export const setGitProjects = makeActionCreator(SET_GIT_PROJECTS, 'projects');
