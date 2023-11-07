import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { useRouteData, useTheme } from '@/core/hooks';
import { Navbar } from './shared/Navbar';
import 'swiper/css';
import 'swiper/css/bundle';

const App = () => {
  const { navBarRequired, path } = useRouteData();
  const { theme } = useTheme();

  return (
    <div
      className={clsx('app-container flex flex-col', {
        'dark bg-dark-main': theme === 'dark',
        'bg-light-main': theme !== 'dark'
      })}
    >
      <div className="h-full overflow-hidden bg-light-main text-black dark:bg-dark-main dark:text-white">
        <Outlet />
      </div>

      {navBarRequired && (
        // TODO: 임시 네브바, 공통 컴포넌트로 교체해야 함
        <Navbar currentPath={`/${path}`} />
      )}
    </div>
  );
};

export default App;
