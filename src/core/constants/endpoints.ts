export const BACKEND_API_ENDPOINT =
  import.meta.env.VITE_DEPLOY_TARGET === 'production'
    ? import.meta.env.VITE_PROD_BACKEND_API_ENDPOINT
    : import.meta.env.VITE_DEV_BACKEND_API_ENDPOINT;
