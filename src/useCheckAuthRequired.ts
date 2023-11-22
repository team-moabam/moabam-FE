import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import memberOptions from '@/core/api/options/member';
import { useMoveRoute, useRouteData } from '@/core/hooks';

/**
 * 로그인이 필요한 페이지에서 로그인을 여부를 체크하고 로그인 페이지로 이동시키는 훅
 */
const useCheckAuthRequired = () => {
  const { error } = useQuery({ ...memberOptions.myInfo() });
  const { authRequired } = useRouteData();
  const moveTo = useMoveRoute();

  useEffect(() => {
    if (authRequired && error?.response?.status === 401) {
      moveTo('join');
    }
  }, [authRequired, error]);
};

export default useCheckAuthRequired;
