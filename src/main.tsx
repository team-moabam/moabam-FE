import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import router from '@/core/routes/router';
import { debounce } from '@/core/utils/debounce';
import { initializeFirebase, getFCMToken } from '@/core/utils/firebase';
import { ThemeProvider } from '@/core/hooks/useTheme';
import notificationAPI from '@/core/api/functions/notificationAPI';
import queryClient from '@/core/api/queryClient';
import { PWAInstallBannerProvider } from '@/domain/PWAInstallBanner/hooks/usePWAInstallBanner';
import { setupMockServiceWorker, setupFCMServiceWorker } from './setupWorker';
import './main.css';

// 앱에서 사용되는 FCM 서비스 워커, MSW 서비스 워커를 등록
const setupSW = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const workerUrl = new URL('/firebase-messaging-sw.js', location.origin);
  workerUrl.searchParams.set('msw', import.meta.env.VITE_MSW);

  await setupFCMServiceWorker(workerUrl);

  if (import.meta.env.VITE_MSW === 'true') {
    await setupMockServiceWorker(workerUrl);
  }
};

// 알림 권한 허용 여부에 따라 FCM 토큰을 API 서버에 전송하는 이벤트 핸들러 등록
const setupFCM = async () => {
  if (!('permissions' in navigator)) {
    return;
  }

  initializeFirebase();

  const handlePostFCMToken = debounce(async () => {
    try {
      const fcmToken = await getFCMToken();
      notificationAPI.postFCMToken({ fcmToken });
    } catch (err) {
      console.error(err);
    }
  }, 1000);

  const permission = await navigator.permissions.query({
    name: 'notifications'
  });

  permission.onchange = () => {
    if (permission.state !== 'granted') {
      return;
    }

    handlePostFCMToken();
  };
};

Promise.allSettled([setupFCM(), setupSW()]).then(() => {
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
