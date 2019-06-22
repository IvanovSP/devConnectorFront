import { all, fork, call, takeEvery, put } from 'redux-saga/effects';
import { GET_PROFILE_INFO, setProfileInfo } from '@/redux/actions';
import profile from '@/api/profile';
import { handleError } from '@/redux/sagas/global';

function* profileSaga() {
  try {
    const { data: profileInfo } = yield call(profile);
    yield put(setProfileInfo(profileInfo));
  } catch (error) {
    yield call(handleError, error);
  }
}

function* watchForProfileSaga () {
  yield takeEvery(GET_PROFILE_INFO, profileSaga);
}

export default function* () {
  yield all([fork(watchForProfileSaga)]);
}
