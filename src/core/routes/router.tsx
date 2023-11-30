import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFoundPage';
import App from '@/App';
import PrivateRoute from '@/PrivateRoute';
import PublicRoute from '@/PublicRoute';
import publicRoutes from './publicRoutes';
import privateRoutes from './privateRoutes';
import { Route } from './types/route';

export const notFoundRoute: Route = {
  path: '*',
  navBarRequired: false,
  element: <NotFoundPage />
} as const;

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
