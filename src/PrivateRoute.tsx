import { Navigate, Outlet } from 'react-router-dom';
import { STORAGE_KEYS } from './core/constants/storageKeys';
import { useRouteData } from './core/hooks';
import InvalidPage from '@/pages/InvalidPage';

const PrivateRoute = () => {
  const memberId = localStorage.getItem(STORAGE_KEYS.MEMBER_ID);
  const { params } = useRouteData();

  for (const [paramName, paramValue] of Object.entries(params)) {
    if (isNaN(Number(paramValue))) {
      return <InvalidPage paramName={paramName} />;
    }
  }

  return memberId ? <Outlet /> : <Navigate to="/join" />;
};

export default PrivateRoute;
