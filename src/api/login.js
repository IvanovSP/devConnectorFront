import axios from 'axios';

const login = async ({ email, password }) => {
  const config = {
    method: 'post',
    url: 'http://localhost:5000/api/users/login',
    data: { email, password },
  };
  const res = await axios(config);
  return res;
}

export default login;
