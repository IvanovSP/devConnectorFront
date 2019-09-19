import axios from 'axios';
import { getDeleted, getPosted, getPutted } from '@/utils/socials';

export const profilePUT = async (data) => {
  const config = {
    method: 'put',
    url: 'http://localhost:5000/api/profile/',
    headers: { Authorization: localStorage.getItem('session-token') },
    data,
  };
  const res = await axios(config);
  return res;
};

export const profileGET = async (userId = '') => {
  const config = {
    method: 'get',
    url: `http://localhost:5000/api/profile/${userId}`,
    headers: { Authorization: localStorage.getItem('session-token') },
  };
  const res = await axios(config);
  return res;
};

export const profileGit = async (gitId = '') => {
  const config = {
    method: 'get',
    url: `http://localhost:5000/api/profile/github/${gitId}`,
    headers: { Authorization: localStorage.getItem('session-token') },
  };
  const res = await axios(config);
  return res;
};

export const updateSocials = async ({ socials, overallSocials, userSocials }) => {
  const deleteRequests = getDeleted({ socials, userSocials }).map(({ id }) => axios({
    method: 'delete',
    url: `http://localhost:5000/api/profile/social/${id}`,
    headers: { Authorization: localStorage.getItem('session-token') },
  }));

  const postRequests = getPosted({ socials, overallSocials, userSocials })
    .filter(({ value }) => (new URL(value)).pathname && (new URL(value)).pathname.substr(1))
    .map(({ id, value }) => axios({
      method: 'post',
      url: `http://localhost:5000/api/profile/social/${id}`,
      data: { url: (new URL(value)).pathname.substr(1) + (new URL(value)).search || '' },
      headers: { Authorization: localStorage.getItem('session-token') },
    }));

  const putRequests = getPutted({ socials, userSocials })
    .filter(({ value }) => (new URL(value)).pathname && (new URL(value)).pathname.substr(1))
    .map(({ id, value }) => axios({
      method: 'put',
      url: `http://localhost:5000/api/profile/social/${id}`,
      data: { url: (new URL(value)).pathname.substr(1) + (new URL(value)).search || '' },
      headers: { Authorization: localStorage.getItem('session-token') },
    }));
  await Promise.all([...deleteRequests, ...postRequests, ...putRequests]);
};

export const updateSkills = async ({ newSkills, skills }) => {
  const deleteRequests = skills
    .filter(({ skill }) => !newSkills.find(({ skill: newSkill }) => skill === newSkill))
    .map(({ id }) => axios({
      method: 'delete',
      url: `http://localhost:5000/api/profile/skillset/${id}`,
      headers: { Authorization: localStorage.getItem('session-token') },
    }));
  const postRequests = newSkills
    .filter(({ skill }) => !skills.find(({ skill: oldSkill }) => skill === oldSkill))
    .map(({ id = '', skill }) => axios({
      method: 'post',
      url: `http://localhost:5000/api/profile/skillset/${id}`,
      data: { skillName: skill },
      headers: { Authorization: localStorage.getItem('session-token') },
    }));
  await Promise.all([...deleteRequests, ...postRequests]);
};

export const updateExpirience = async ({ newExperience, experience }) => {
  const postRequests = newExperience
    .filter(({ id }) => !id)
    .map(expr => axios({
      method: 'post',
      url: 'http://localhost:5000/api/profile/expirience',
      data: expr,
      headers: { Authorization: localStorage.getItem('session-token') },
    }));
  const deleteRequests = experience
    .filter(({ id }) => id && !newExperience.find(({ id: newId }) => id === newId))
    .map(({ id }) => axios({
      method: 'delete',
      url: 'http://localhost:5000/api/profile/expirience',
      data: { id },
      headers: { Authorization: localStorage.getItem('session-token') },
    }));
  const putRequests = experience
    .filter(({ id }) => id && newExperience.find(({ id: newId }) => id === newId))
    .map(expr => axios({
      method: 'put',
      url: 'http://localhost:5000/api/profile/expirience',
      data: expr,
      headers: { Authorization: localStorage.getItem('session-token') },
    }));

  await Promise.all([...deleteRequests, ...postRequests, ...putRequests]);
};
