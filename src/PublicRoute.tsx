import { Navigate, Outlet } from 'react-router-dom';
import { STORAGE_KEYS } from './core/constants/storageKeys';

const PublicRoute = () => {
  const memberId = localStorage.getItem(STORAGE_KEYS.MEMBER_ID);
  return memberId ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
