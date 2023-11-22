import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '@suspensive/react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import memberOptions from './core/api/options/member';
import { useMoveRoute, useRouteData, useTheme } from '@/core/hooks';
import { Navbar } from './shared/Navbar';
import { UnknownFallback } from './shared/ErrorBoundary';
import 'swiper/css';
import 'swiper/css/bundle';

const App = () => {
  const { navBarRequired, authRequired, path } = useRouteData();
  const moveTo = useMoveRoute();
  const { theme } = useTheme();
  const { error } = useQuery({ ...memberOptions.myInfo() });

  useEffect(() => {
    if (authRequired && error?.response?.status === 401) {
      moveTo('join');
    }
  }, [authRequired, error]);

  return (
    <div
      className={clsx('app-container flex flex-col', {
        'dark bg-dark-main': theme === 'dark',
        'bg-light-main': theme !== 'dark'
      })}
    >
      <ErrorBoundary fallback={<UnknownFallback />}>
        <div className="h-full overflow-hidden bg-light-main text-black dark:bg-dark-main dark:text-white">
          <Outlet />
        </div>

        {navBarRequired && <Navbar currentPath={`/${path}`} />}
      </ErrorBoundary>
    </div>
  );
};

export default App;
