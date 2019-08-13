import axios from 'axios';

export default async () => {
  const config = {
    method: 'get',
    url: 'http://localhost:5000/api/socials',
    headers: { Authorization: localStorage.getItem('session-token') },
  };
  const { data } = await axios(config);
  return data;
};
