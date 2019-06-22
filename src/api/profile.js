import axios from 'axios';

const profile = async () => {
  const config = {
    method: 'get',
    url: 'http://localhost:5000/api/profile/',
    headers: { Authorization: localStorage.getItem('session-token') },
  };
  const res = await axios(config);
  return res;
}

export default profile;
