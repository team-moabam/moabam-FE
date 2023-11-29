import { Navigate, Outlet } from 'react-router-dom';
import { STORAGE_KEYS } from './core/constants/storageKeys';

const PrivateRoute = () => {
  const memberId = localStorage.getItem(STORAGE_KEYS.MEMBER_ID);
  return memberId ? <Outlet /> : <Navigate to="/join" />;
};

export default PrivateRoute;
