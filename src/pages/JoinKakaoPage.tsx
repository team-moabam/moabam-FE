import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import memberAPI from '@/core/api/functions/memberAPI';
import { getFCMToken } from '@/core/utils/firebase';
import notificationAPI from '@/core/api/functions/notificationAPI';
import { useMoveRoute, useLocalStorage } from '@/core/hooks';
import { STORAGE_KEYS } from '@/core/constants/storageKeys';
import { LoadingSpinner } from '@/shared/LoadingSpinner';

const JoinKakaoPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const [memberId, setMemberId] = useLocalStorage<number | null>(
    STORAGE_KEYS.MEMBER_ID,
    null
  );
  const moveTo = useMoveRoute();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: memberAPI.postMemberKakaoAuth
  });

  useEffect(() => {
    mutate(
      { code: code ?? '' },
      {
        onSuccess: async (data) => {
          moveTo(data.signUp ? 'guide' : 'start');
          setMemberId(data.memberId);

          const fcmToken = await getFCMToken();
          notificationAPI.postFCMToken({ fcmToken });
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
