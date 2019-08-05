import { put } from 'redux-saga/effects';
import { setIsSignedIn } from '@/redux/actions';
import history from '@/utils/history';
const LOGOUT_ERRORS = [500, 401];

export function* handleError({ response }) {
  if (response.status === 500) {
    history.push('/woops');
    return
  }
  if (response.status === 401) {
    localStorage.removeItem('session-token');
    yield put(setIsSignedIn(false));
  }
  history.push('/');
}
