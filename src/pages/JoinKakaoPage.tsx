import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import memberAPI from '@/core/api/functions/memberAPI';
import { useMoveRoute } from '@/core/hooks';
import { LoadingSpinner } from '@/shared/LoadingSpinner';

const JoinKakaoPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const moveTo = useMoveRoute();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: memberAPI.postMemberKakaoAuth
  });

  useEffect(() => {
    mutate(
      { code: code ?? '' },
      {
        onSuccess: ({ signUp }) => {
          moveTo(signUp ? 'guide' : 'start');
          // TODO: FCM 토큰을 발급받고 API 서버에 전달하는 로직 추가
        }
      }
    );
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      {isPending && (
        <LoadingSpinner
          colorStyle="text-light-point dark:text-dark-point"
          size="7xl"
        />
      )}
      {(isError && error.response?.data?.message) ??
        '로그인 중에 문제가 발생했어요.'}
    </div>
  );
};

export default JoinKakaoPage;
