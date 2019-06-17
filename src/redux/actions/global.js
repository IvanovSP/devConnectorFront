import makeActionCreator from '../../utils/makeActionCreator';

export const LOADING_START = 'LOADING_START';
export const loadingStart = makeActionCreator(LOADING_START);

export const LOADING_END = 'LOADING_END';
export const loadingEnd = makeActionCreator(LOADING_END);
