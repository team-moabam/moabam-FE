import { useEffect } from 'react';
import { useLocalStorage, useMoveRoute, useRouteData } from '@/core/hooks';
import { STORAGE_KEYS } from '@/core/constants/storageKeys';

/**
 * 로그인이 필요한 페이지에서 로그인을 여부를 체크하고 로그인 페이지로 이동시키는 훅
 */
const useCheckAuthRequired = () => {
  const { authRequired } = useRouteData();
  const [memberId, setMemberId] = useLocalStorage<number | null>(
    STORAGE_KEYS.MEMBER_ID,
    null
  );
  const moveTo = useMoveRoute();

  useEffect(() => {
    if (authRequired && !memberId) {
      moveTo('join');
    }
  }, [memberId]);
};

export default useCheckAuthRequired;
