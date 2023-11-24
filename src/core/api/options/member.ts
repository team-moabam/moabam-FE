import { queryOptions } from '@tanstack/react-query';
import memberAPI from '../functions/memberAPI';

const memberOptions = {
  myInfo: () =>
    queryOptions({
      queryKey: ['members', 'myInfo'] as const,
      queryFn: () => memberAPI.getMyInfo()
    }),
  memberInfo: (memberId = '') =>
    queryOptions({
      queryKey: ['members', 'memberInfo'] as const,
      queryFn: () => memberAPI.getMemberInfo(memberId)
    })
};

export default memberOptions;
