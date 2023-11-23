import { queryOptions } from '@tanstack/react-query';
import userAPI from '../functions/userAPI';

const userOptions = {
  user: (userId = '') =>
    queryOptions({
      queryKey: ['user'] as const,
      queryFn: () => userAPI.getUser(userId)
    })
};

export default userOptions;
