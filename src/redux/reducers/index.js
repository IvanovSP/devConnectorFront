import { combineReducers } from 'redux';

import isLoading from './global';
import login from './login';

export default combineReducers({
  isLoading,
  login,
});
