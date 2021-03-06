import { all, fork, call, takeEvery, put, take, select } from 'redux-saga/effects';
import {
  GET_PROFILE_INFO,
  setProfileInfo,
  setGitProjects,
  GET_SUGGESTIONS,
  setSuggestions,
  UPDATE_PROFILE,
  updateProfileLoading,
  GET_OVERALL_SOCIALS,
  putOverallSocials,
} from '@/redux/actions';
import {
  profilePUT,
  profileGET,
  profileGit,
  updateSocials as updateSocialsAPI,
  updateSkills as updateSkillsAPI,
  updateExpirience as updateExpirienceAPI,
  updateEducation as updateEducationAPI,
} from '@/api/profile';
import fetchOverallSocials from '@/api/socials';
import { getSuggestions } from '@/api/sugestions';
import { handleError } from '@/redux/sagas/global';
import { getInfo, getOverallSocials as getOverallSocialsSelector } from '@/redux/selectors/profile';

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
      skills,
      socials,
      experience,
      education,
    } = yield take(UPDATE_PROFILE);
    yield put(updateProfileLoading(true));

    yield all([
      call(profilePUT, {
        city,
        github_username,
        bio,
        email,
        profession,
        company_name,
        user_name,
      }),
      call(skillsUpdateSaga, { newSkills : skills }),
      call(updateSocials, { socials }),
      call(educationUpdateSaga, { education }),
      call(experienceUpdateSaga, { experience }),
    ]);
    yield call(getProfileSaga, {});
    yield put(updateProfileLoading(false));
  }
}

function* educationUpdateSaga({ education: newEducation }) {
  const { education } = yield select(getInfo);
  yield call(updateEducationAPI, { newEducation, education });
}

function* experienceUpdateSaga({ experience: newExperience }) {
  const { experience } = yield select(getInfo);
  yield call(updateExpirienceAPI, { newExperience, experience });
}

function* skillsUpdateSaga({ newSkills }) {
  const { skills } = yield select(getInfo);
  yield call(updateSkillsAPI, { newSkills, skills });
}

function* updateSocials({ socials }) {
  const overallSocials = yield select(getOverallSocialsSelector);
  const { social: userSocials } = yield select(getInfo);
  yield call(updateSocialsAPI, { socials, overallSocials, userSocials });
}

function* getOverallSocials() {
  while (true) {
    yield take(GET_OVERALL_SOCIALS);
    const { socials } = yield call(fetchOverallSocials);
    yield put(putOverallSocials(socials));
  }
}

function* getProfileSaga({ userId }) {
  try {
    const { data: profileInfo } = yield call(profileGET, userId);
    yield put(setProfileInfo(profileInfo));
    const { github_username } = profileInfo;
    if (github_username) {
      const { data: gitData } = yield call(profileGit, github_username);
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

function* watchForProfileSaga() {
  yield takeEvery(GET_PROFILE_INFO, getProfileSaga);
}

export default function* () {
  yield all([
    fork(watchForProfileSaga),
    fork(suggestionsSaga),
    fork(putProfileSaga),
    fork(getOverallSocials),
  ]);
}
