import { all, fork, call, takeEvery, put, take } from 'redux-saga/effects';
import { GET_PROFILE_INFO, setProfileInfo, setGitProjects, GET_SUGGESTIONS, setSuggestions, UPDATE_PROFILE, updateProfileLoading } from '@/redux/actions';
import { profilePUT, profileGET, profileGit } from '@/api/profile';
import { getSuggestions } from '@/api/sugestions';
import { handleError } from '@/redux/sagas/global';

function* putProfileSaga() {
  while (true) {
    const {
      city,
      github_username,
      bio,
      email,
      profession,
      company_name,
      user_name,
    } = yield take(UPDATE_PROFILE);
    debugger;
    yield put(updateProfileLoading(true));

    yield call(profilePUT, {
      city,
      github_username,
      bio,
      email,
      profession,
      company_name,
      user_name,
    });

    yield call(getProfileSaga, {});
    yield put(updateProfileLoading(false));
  }
}

function* getProfileSaga({ userId }) {
  try {
    const { data: profileInfo } = yield call(profileGET, userId);
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

function* suggestionsSaga() {
  while (true) {
    const { searchQuery, fieldName } = yield take(GET_SUGGESTIONS);
    if (!searchQuery) return;

    try {
      const suggestions = yield call(getSuggestions, { searchQuery, fieldName });
      yield put(setSuggestions(suggestions, fieldName));
    } catch (error) {
      yield put(setSuggestions([], fieldName));
      yield call(handleError, error);
    }
  }
}


function* watchForProfileSaga () {
  yield takeEvery(GET_PROFILE_INFO, getProfileSaga);
}

export default function* () {
  yield all([
    fork(watchForProfileSaga),
    fork(suggestionsSaga),
    fork(putProfileSaga),
  ]);
}
