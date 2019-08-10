import produce from 'immer';

import {
  SET_PROFILE_INFO,
  SET_GIT_PROJECTS,
  SET_SUGGESTIONS,
} from '@/redux/actions';

import createReducer from '@/utils/createReducer';

const initialState = {
  info: {},
  projects: [],
  suggestions: {},
};

export default createReducer(initialState, {
  [SET_PROFILE_INFO](state, { info }) {
    return produce(state, draft => {
      draft.info = info;
    });
  },
  [SET_GIT_PROJECTS](state, { projects }) {
    return produce(state, draft => {
      draft.projects = projects;
    });
  },
  [SET_SUGGESTIONS](state, { suggestions }) {
    return produce(state, draft => {
      Object.assign(draft.suggestions, suggestions);
    });
  },
});
