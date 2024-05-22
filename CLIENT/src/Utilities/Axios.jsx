import axios from 'axios';

// create an axios instance
export const axiosInstance = axios.create({ 
    baseURL: import.meta.env.VITE_API_URI,
    headers: {'Content-Type' : 'application/json'},
});