import { put, call, fork, all, takeEvery, take } from 'redux-saga/effects';
import { REQUEST_LOGIN, setLoginError, setIsSignedIn, APP_INIT } from '@/redux/actions';
import login from '@/api/login';

export function* reqestLogin({ email, password, history }) {
  try {
    const { data: { token } } = yield call(login, { email, password });
    localStorage.setItem('session-token', token);
    yield put(setIsSignedIn(true));
    yield call(history.push, '/');
  } catch (error) {
    console.error(error);
    const errorMessage = error.status === 500 ? 'Server error, try later' : 'Password invalid or user not found';
    yield put(setLoginError(errorMessage));
  }
}

export function* watchForReqestLogin() {
  yield takeEvery(REQUEST_LOGIN, reqestLogin);
}

function* appInit() {
  yield take(APP_INIT);
  const bearer = localStorage.getItem('session-token');
  if (bearer) {
    yield put(setIsSignedIn(true));
  }
}

export default function* loginSaga() {
  yield all([fork(watchForReqestLogin), fork(appInit)]);
}
