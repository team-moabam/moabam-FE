import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import PrivateRoute from '@/PrivateRoute';
import PublicRoute from '@/PublicRoute';
import publicRoutes, { notFoundRoute } from './publicRoutes';
import privateRoutes from './privateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <PrivateRoute />,
        children: Object.values(privateRoutes).map(({ path, element }) => ({
          path,
          element
        }))
      },
      {
        path: 'join',
        element: <PublicRoute />,
        children: Object.values(publicRoutes).map(({ path, element }) => ({
          path,
          element
        }))
      },
      {
        path: notFoundRoute.path,
        element: notFoundRoute.element
      }
    ]
  }
]);

export default router;
