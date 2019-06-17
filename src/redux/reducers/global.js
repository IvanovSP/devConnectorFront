import {
  LOADING_START,
  LOADING_END,
} from '@/redux/actions';
import createReducer from '@/utils/createReducer';


export default createReducer(false, {
  [LOADING_START]() {
    return true;
  },
  [LOADING_END]() {
    return false;
  },
});
