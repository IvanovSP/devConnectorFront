import axios from 'axios';

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
