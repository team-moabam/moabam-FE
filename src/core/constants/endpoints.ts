// 백엔드 API 경로
export const BACKEND_API_ENDPOINT =
  import.meta.env.VITE_DEPLOY_TARGET === 'production'
    ? import.meta.env.VITE_PROD_BACKEND_API_ENDPOINT
    : import.meta.env.VITE_DEV_BACKEND_API_ENDPOINT;

// 클라이언트 배포 경로
// 로컬에서는 VITE_LOCALHOST
// 개발서버에서는 VITE_PROD_DEPLOY_ENDPOINT
// 프로덕션에서는 VITE_DEV_DEPLOY_ENDPOINT
export const CLIENT_DEPLOY_ENDPOINT = import.meta.env.PROD
  ? import.meta.env.VITE_DEPLOY_TARGET === 'production'
    ? import.meta.env.VITE_PROD_DEPLOY_ENDPOINT
    : import.meta.env.VITE_DEV_DEPLOY_ENDPOINT
  : import.meta.env.VITE_LOCALHOST;
