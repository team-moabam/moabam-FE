import { Outlet, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import publicRoutes, { notFoundRoute } from './publicRoutes';
import privateRoutes from './privateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Outlet />,
        children: Object.values(privateRoutes).map(({ path, element }) => ({
          path,
          element
        }))
      },
      {
        path: 'join',
        element: <Outlet />,
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
