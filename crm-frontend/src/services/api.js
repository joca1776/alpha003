// crm-frontend/src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000', // Use a variável de ambiente ou um valor padrão
});

export default api;
