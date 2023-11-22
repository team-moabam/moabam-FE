import { queryOptions } from '@tanstack/react-query';
import memberAPI from '../functions/memberAPI';

const memberOptions = {
  myInfo: () =>
    queryOptions({
      queryKey: ['members', 'myInfo'] as const,
      queryFn: () => memberAPI.getMyInfo()
    })
};

export default memberOptions;
