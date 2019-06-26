import { all, fork, call, takeEvery, put } from 'redux-saga/effects';
import { GET_PROFILE_INFO, setProfileInfo, setGitProjects } from '@/redux/actions';
import { profile, profileGit } from '@/api/profile';
import { handleError } from '@/redux/sagas/global';

function* profileSaga({ userId }) {
  try {
    const { data: profileInfo } = yield call(profile, userId);
    yield put(setProfileInfo(profileInfo));
    const { github_username } = profileInfo;
    if (github_username) {
      const { data: gitData} = yield call(profileGit, github_username);
      yield put(setGitProjects(gitData));
    }
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
