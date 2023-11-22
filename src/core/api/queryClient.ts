import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import memberOptions from '@/core/api/options/member';
import router from '@/core/routes/router';
import { CustomAxiosError } from '@/core/api/types';

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
      console.log('query.queryKey:', query.queryKey);
      console.log(
        'memberOptions.myInfo().queryKey:',
        memberOptions.myInfo().queryKey
      );

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

export default queryClient;
