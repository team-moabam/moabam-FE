import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import memberOptions from '@/core/api/options/member';
import { useLocalStorage, useMoveRoute, useRouteData } from '@/core/hooks';
import { STORAGE_KEYS } from '@/core/constants/storageKeys';

/**
 * 로그인이 필요한 페이지에서 로그인을 여부를 체크하고 로그인 페이지로 이동시키는 훅
 */
const useCheckAuthRequired = () => {
  const { error } = useQuery({ ...memberOptions.myInfo() });
  const { authRequired } = useRouteData();
  const [memberId, setMemberId] = useLocalStorage<number | null>(
    STORAGE_KEYS.MEMBER_ID,
    null
  );
  const moveTo = useMoveRoute();

  // 로컬 스토리지에 memberId가 없다면 로그인 페이지로 이동
  useEffect(() => {
    if (authRequired && !memberId) {
      moveTo('join');
    }
  }, [memberId]);

  // 로그인이 필요한 페이지에서 401 에러가 발생하면 로컬 스토리지 초기화 후 로그인 페이지로 이동
  useEffect(() => {
    if (authRequired && error?.response?.status === 401) {
      setMemberId(null);
    }
  }, [authRequired, error]);
};

export default useCheckAuthRequired;
