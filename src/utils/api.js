import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_ITEM_API_URI // Replace with your API base URL
});

export default api;
