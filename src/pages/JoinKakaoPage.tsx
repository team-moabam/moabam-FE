import { useSearchParams, Navigate } from 'react-router-dom';
import { withAsyncBoundary } from '@suspensive/react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import authOptions from '@/core/api/options/auth';
import { LoadingSpinner } from '@/shared/LoadingSpinner';

const JoinKakaoPage = withAsyncBoundary(
  () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');

    const { data } = useSuspenseQuery({
      ...authOptions.kakao(code ?? ''),
      retry: 1
    });

    return <Navigate to={data.signUp ? '/guide' : '/'} />;
  },
  {
    pendingFallback: (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner
          colorStyle="text-light-point dark:text-dark-point"
          size="7xl"
        />
      </div>
    ),
    rejectedFallback: ({ error }) =>
      error instanceof AxiosError ? error.response?.data?.message : '에러 발생!'
  }
);

export default JoinKakaoPage;
