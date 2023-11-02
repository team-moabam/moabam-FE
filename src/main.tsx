import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from './core/routes/router';
import './main.css';

const setupMSW = async () => {
  if (import.meta.env.VITE_MSW !== 'true') {
    return;
  }

  const { worker } = await import('@/core/mocks/browser');

  return worker.start();
};

const queryClient = new QueryClient();

setupMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
});
