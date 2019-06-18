import produce from 'immer';
import {
  REQUEST_LOGIN,
  SET_LOGIN_ERROR,
  SET_IS_SIGNEDIN,
} from '@/redux/actions';
import createReducer from '@/utils/createReducer';

const initialState = {
  err: '',
  isSignedIn: false,
};

export default createReducer(initialState, {
  [SET_LOGIN_ERROR](state, { err }) {
    return produce(state, draft => {
      draft.err = err;
    });
  },
  [REQUEST_LOGIN](state) {
    return produce(state, draft => {
      draft.err = '';
    });
  },
  [SET_IS_SIGNEDIN](state) {
    return produce(state, draft => {
      draft.isSignedIn = true;
    });
  },
});
