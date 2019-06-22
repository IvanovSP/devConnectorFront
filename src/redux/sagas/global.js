import { put } from 'redux-saga/effects';
import { setIsSignedIn } from '@/redux/actions';
import history from '@/utils/history';

export function* handleError({ response }) {
  if (response.status !== 401) return;
  localStorage.removeItem('session-token');
  yield put(setIsSignedIn(false));
  history.push('/');
}
