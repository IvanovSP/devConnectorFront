import { put, call, fork, all, takeEvery } from 'redux-saga/effects';
import { REQUEST_LOGIN, setLoginError } from '@/redux/actions';
import login from '@/api/login';

export function* reqestLogin({ email, password }) {
  try {
    const token = yield call(login, { email, password });
    localStorage.setItem('session-token', token);
  } catch (error) {
    const errorMessage = error.status === 500 ? 'Server error, try later' : 'Password invalid or user not found';
    yield put(setLoginError(errorMessage));
  }
}

export function* watchForReqestLogin() {
  yield takeEvery(REQUEST_LOGIN, reqestLogin);
}

export default function* loginSaga() {
  yield all([fork(watchForReqestLogin)]);
}
