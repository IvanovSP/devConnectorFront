import axios from 'axios';

const routes = {
  profession: 'api/prof-status/',
  company: 'api/company/',
}

export const getSuggestions = async ({ searchQuery, fieldName }) => {
  const config = {
    method: 'get',
    url: `http://localhost:5000/${routes[fieldName]}${searchQuery}`,
    headers: { Authorization: localStorage.getItem('session-token') },
  };
  const { data } = await axios(config);
  return data;
};
