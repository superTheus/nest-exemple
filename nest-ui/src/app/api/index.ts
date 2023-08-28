import axios from 'axios';

const baseURL = "http://localhost:3000/";

const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default api;