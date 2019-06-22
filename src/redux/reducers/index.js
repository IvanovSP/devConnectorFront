import { combineReducers } from 'redux';

import isLoading from './global';
import login from './login';
import profile from './profile';

export default combineReducers({
  isLoading,
  profile,
  login,
});
