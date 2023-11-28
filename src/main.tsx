import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import router from '@/core/routes/router';
import Debounce from '@/core/utils/debounce';
import { getFCMToken } from '@/core/utils/firebase';
import { ThemeProvider } from '@/core/hooks/useTheme';
import notificationAPI from '@/core/api/functions/notificationAPI';
import queryClient from '@/core/api/queryClient';
import { PWAInstallBannerProvider } from '@/PWAInstallBanner/hooks/usePWAInstallBanner';
import './main.css';

const setupMSW = async () => {
  if (import.meta.env.VITE_MSW !== 'true') {
    return;
  }

  const { worker } = await import('@/core/mocks/browser');

  return worker.start({
    onUnhandledRequest(request, print) {
      const excludedUrls = [
        '/assets/',
        '/node_modules/',
        'chrome-extension://',
        'fonts.googleapis.com/css2',
        'cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1'
      ];

      if (excludedUrls.some((url) => request.url.includes(url))) {
        return;
      }

      print.warning();
    }
  });
};

const setupSW = async () => {
  if (import.meta.env.VITE_MSW === 'true') {
    return;
  }

  if (!('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/firebase-messaging-sw.js', {
      scope: '/'
    });
  });
};

const setupFCM = async () => {
  const debounce = new Debounce();

  if (!('permissions' in navigator)) {
    return;
  }

  const permission = await navigator.permissions.query({
    name: 'notifications'
  });

  permission.onchange = () => {
    if (permission.state !== 'granted') {
      return;
    }

    debounce.run(async () => {
      try {
        const fcmToken = await getFCMToken();
        notificationAPI.postFCMToken({ fcmToken });
      } catch (err) {
        console.error(err);
      }
    }, 1000);
  };
};

Promise.allSettled([setupMSW(), setupFCM(), setupSW()]).then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <PWAInstallBannerProvider>
              <RouterProvider router={router} />
              <ReactQueryDevtools initialIsOpen={false} />
            </PWAInstallBannerProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
});
