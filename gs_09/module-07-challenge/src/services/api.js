import axios from 'axios';

const api = axios.create({
  baseURL: 'https://module-07-api.herokuapp.com',
});

export default api;
