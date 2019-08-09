import { all, fork, call, takeEvery, put } from 'redux-saga/effects';
import { GET_PROFILE_INFO, setProfileInfo, setGitProjects, GET_SUGGESTIONS } from '@/redux/actions';
import { profile, profileGit } from '@/api/profile';
import { getSuggestions } from '@/api/sugestions';
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

export function* suggestionsSaga() {
  while (true) {
    const { searchQuery, fieldName } = yield take(GET_SUGGESTIONS);
    const suggestions = yield call(getSuggestions, { searchQuery, fieldName });
  }
}


function* watchForProfileSaga () {
  yield takeEvery(GET_PROFILE_INFO, profileSaga);
}

export default function* () {
  yield all([
    fork(watchForProfileSaga),
    fork(suggestionsSaga),
  ]);
}
