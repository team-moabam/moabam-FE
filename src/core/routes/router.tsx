import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: Object.values(routes).map(({ path, element }) => ({
      path,
      element
    }))
  }
]);

export default router;
