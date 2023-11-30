import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import memberAPI from '@/core/api/functions/memberAPI';
import { getFCMToken } from '@/core/utils/firebase';
import notificationAPI from '@/core/api/functions/notificationAPI';
import { useMoveRoute } from '@/core/hooks';
import { STORAGE_KEYS } from '@/core/constants/storageKeys';
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
        onSuccess: async (data) => {
          moveTo(data.signUp ? 'guide' : 'start');
          localStorage.setItem(STORAGE_KEYS.MEMBER_ID, JSON.stringify(data.id));

          if (Notification && Notification.permission === 'granted') {
            // 알림 권한 허용된 상태면 FCM 토큰을 API 서버에 전송
            const fcmToken = await getFCMToken();
            notificationAPI.postFCMToken({ fcmToken });
          } else {
            // 알림 권한 허용되지 않은 상태면 알림 권한 요청
            // (권한 승인시 자동으로 FCM 토큰을 API 서버에 전송)
            Notification.requestPermission();
          }
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
