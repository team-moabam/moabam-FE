export const baseURL = (path: string) => {
  return import.meta.env.VITE_BACKEND_API_ENDPOINT + path;
};
