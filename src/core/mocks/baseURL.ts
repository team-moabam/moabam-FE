import { BACKEND_API_ENDPOINT } from '@/core/constants/endpoints';

export const baseURL = (path: string) => {
  return BACKEND_API_ENDPOINT + path;
};
