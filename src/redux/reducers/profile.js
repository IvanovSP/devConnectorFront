import produce from 'immer';

import {
  SET_PROFILE_INFO,
} from '@/redux/actions';

import createReducer from '@/utils/createReducer';

const initialState = {
  info: {},
};

export default createReducer(initialState, {
  [SET_PROFILE_INFO](state, { info }) {
    return produce(state, draft => {
      draft.info = info;
    });
  },
});
