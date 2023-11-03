import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import App from '@/App';

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
