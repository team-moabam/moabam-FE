import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import memberOptions from '@/core/api/options/member';
import router from '@/core/routes/router';
import { CustomAxiosError } from '@/core/api/types';
import { STORAGE_KEYS } from '../constants/storageKeys';

const handleRedirectOnError = (error: CustomAxiosError) => {
  console.log('handleRedirectOnError 1');
  if (error.response?.status === 401) {
    console.log('handleRedirectOnError 2');
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
    onError: (error, query) => {
      console.log('onError 1');
      try {
        console.log('onError 2');
        if (
          JSON.stringify(query.queryKey) ===
          JSON.stringify(memberOptions.myInfo().queryKey)
        ) {
          return;
        }
        console.log('onError 3');

        handleRedirectOnError(error);
      } catch (err) {
        console.error(err);
      }
    }
  }),
  mutationCache: new MutationCache({
    onError: handleRedirectOnError
  })
});

export default queryClient;
