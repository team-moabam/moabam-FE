import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '@suspensive/react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { useRouteData, useTheme } from '@/core/hooks';
import timeOption from './core/api/options/time';
import getTimeRange from './core/utils/getTimeRange';
import useCheckAuthRequired from './useCheckAuthRequired';
import { Navbar } from './shared/Navbar';
import { UnknownFallback } from './shared/ErrorBoundary';
import 'swiper/css';
import 'swiper/css/bundle';
import AboutMoabam from './AboutMoabam/components/AboutMoabam';

const App = () => {
  const { navBarRequired, path } = useRouteData();
  const { theme, setTheme } = useTheme();
  useCheckAuthRequired();

  const { data, isSuccess } = useQuery({
    ...timeOption,
    refetchInterval: 1000 * 60 * 10,
    refetchOnWindowFocus: true
  });

  useEffect(() => {
    const today = data || new Date();
    setTheme(getTimeRange(today) === 'MORNING' ? 'light' : 'dark');
  }, [data, isSuccess, setTheme]);

  return (
    <div
      className={clsx('h-screen w-screen', {
        'min-[1024px]:bg-dark-main': theme === 'dark',
        'min-[1024px]:bg-light-main': theme !== 'dark'
      })}
    >
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
      <div
        className={clsx('app-info', {
          dark: theme === 'dark',
          light: theme !== 'dark'
        })}
      >
        <AboutMoabam theme={theme} />
      </div>
    </div>
  );
};

export default App;
