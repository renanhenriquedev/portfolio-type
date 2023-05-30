import axios from 'axios';

const api = axios.create({
    baseURL : 'https://site-pessoal-api-9wf6.onrender.com/api',
});

export default api;