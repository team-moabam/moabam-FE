import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from '@/core/routes/router';
import { ThemeProvider } from '@/core/hooks/useTheme';
import queryClient from '@/core/api/queryClient';
import './main.css';

const setupMSW = async () => {
  if (import.meta.env.VITE_MSW !== 'true') {
    return;
  }

  const { worker } = await import('@/core/mocks/browser');

  return worker.start();
};

setupMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
});
