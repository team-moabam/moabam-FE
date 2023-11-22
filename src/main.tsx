import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import memberOptions from '@/core/api/options/member';
import router from '@/core/routes/router';
import { ThemeProvider } from '@/core/hooks/useTheme';
import { CustomAxiosError } from '@/core/api/types';
import './main.css';

const setupMSW = async () => {
  if (import.meta.env.VITE_MSW !== 'true') {
    return;
  }

  const { worker } = await import('@/core/mocks/browser');

  return worker.start();
};

const handleRedirectOnError = (error: CustomAxiosError) => {
  if (error.response?.status === 401) {
    router.navigate('/join');
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (
        JSON.stringify(query.queryKey) ===
        JSON.stringify(memberOptions.myInfo().queryKey)
      ) {
        return;
      }

      handleRedirectOnError(error);
    }
  }),
  mutationCache: new MutationCache({
    onError: handleRedirectOnError
  })
});

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
