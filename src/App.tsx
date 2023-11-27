import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '@suspensive/react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { Helmet } from 'react-helmet-async';
import { useRouteData, useTheme } from '@/core/hooks';
import timeOption from './core/api/options/time';
import getTimeRange from './core/utils/getTimeRange';
import { Navbar } from './shared/Navbar';
import { UnknownFallback } from './shared/ErrorBoundary';
import useCheckAuthRequired from './useCheckAuthRequired';
import 'swiper/css';
import 'swiper/css/bundle';
import AboutMoabam from './AboutMoabam/components/AboutMoabam';

const App = () => {
  const { navBarRequired, path, pageName } = useRouteData();
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
    <>
      <Helmet>
        <title>모아밤 {pageName ? `: ${pageName}` : ''}</title>
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content="Moabam : 그룹 루틴 서비스"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/gTrKrDv/meta-Image.png"
        />
        <meta
          property="og:description"
          content="귀여운 새와 다함께 루틴을 실천해요!"
        />
        <meta
          property="og:site_name"
          content="Moabam"
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="630"
        />
      </Helmet>
      <div
        className={clsx('h-screen w-screen', {
          'dark min-[1024px]:bg-dark-main': theme === 'dark',
          'min-[1024px]:bg-light-main': theme !== 'dark'
        })}
      >
        <div className="app-container flex flex-col bg-light-main dark:bg-dark-main">
          <ErrorBoundary fallback={<UnknownFallback />}>
            <div className="h-full overflow-hidden bg-light-main text-black dark:bg-dark-main dark:text-white">
              <Outlet />
            </div>

            {navBarRequired && <Navbar currentPath={`/${path}`} />}
          </ErrorBoundary>
        </div>
        <div className="app-info">
          <AboutMoabam theme={theme} />
        </div>
      </div>
    </>
  );
};

export default App;
