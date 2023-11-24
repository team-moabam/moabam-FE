import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import router from '@/core/routes/router';
import { CustomAxiosError } from '@/core/api/types';
import { STORAGE_KEYS } from '../constants/storageKeys';

const handleRedirectOnError = (error: CustomAxiosError) => {
  if (error.response && error.response?.status === 401) {
    localStorage.removeItem(STORAGE_KEYS.MEMBER_ID);
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
    onError: handleRedirectOnError
  }),
  mutationCache: new MutationCache({
    onError: handleRedirectOnError
  })
});

export default queryClient;
