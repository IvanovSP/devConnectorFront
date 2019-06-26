import axios from 'axios';

export const profile = async (userId = '') => {
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
