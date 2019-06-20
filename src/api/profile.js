import axios from 'axios';

const profile = async (bearer) => {
  const config = {
    method: 'get',
    url: 'http://localhost:5000/api/profile/',
    headers: { Authorization: bearer },
  };
  const res = await axios(config);
  return res;
}

export default profile;
