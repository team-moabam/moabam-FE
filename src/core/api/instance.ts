import axios, { AxiosResponse } from 'axios';
import { CustomAxiosInstance } from './types';

const baseURL = import.meta.env.VITE_BACKEND_API_ENDPOINT;

// 일반적으로 사용하는 axios 인스턴스
export const baseInstance: CustomAxiosInstance = axios.create({ baseURL });

// multipart/form-data 를 위한 axios 인스턴스
export const formDataInstance: CustomAxiosInstance = axios.create({ baseURL });

const onSucessResponse = (res: AxiosResponse) => {
  const { data, status } = res;

  return { ...data, statusCode: status };
};

const onErrorRequest = (error: any) => Promise.reject(error);
const onErrorResponse = (error: any) => Promise.reject(error);

baseInstance.interceptors.response.use(onSucessResponse, onErrorResponse);

formDataInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'multipart/form-data';
  return config;
}, onErrorRequest);

formDataInstance.interceptors.response.use(onSucessResponse, onErrorResponse);
