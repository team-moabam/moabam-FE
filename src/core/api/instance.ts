import axios, { AxiosResponse } from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_API_ENDPOINT;

export const baseInstance = axios.create({ baseURL });
export const formDataInstance = axios.create({ baseURL });

const onSucessResponse = (response: AxiosResponse) => {
  const { data, status } = response;

  return { statusCode: status, ...data };
};

const onErrorRequest = (error: unknown) => Promise.reject(error);
const onErrorResponse = (error: unknown) => Promise.reject(error);

baseInstance.interceptors.response.use(onSucessResponse, onErrorResponse);

formDataInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'multipart/form-data';
  return config;
}, onErrorRequest);

formDataInstance.interceptors.response.use(onSucessResponse, onErrorResponse);
