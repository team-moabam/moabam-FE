import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_API_ENDPOINT;

// const baseURL =
//   import.meta.env.VITE_MSW_MODE === 'true'
//     ? ''
//     : import.meta.env.VITE_BACKEND_API_ENDPOINT;

export const baseInstance = axios.create({ baseURL });
