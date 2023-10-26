import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_API_ENDPOINT;

export const baseInstance = axios.create({ baseURL });
