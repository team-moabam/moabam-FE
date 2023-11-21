import { queryOptions } from '@tanstack/react-query';
import userAPI from '../functions/userAPI';

const userOptions = {
  user: (userId = '') =>
    queryOptions({
      queryKey: ['user', userId] as const,
      queryFn: () => userAPI.getUser(userId)
    }),
  logout: () =>
    queryOptions({
      queryKey: ['user', 'logout'] as const,
      queryFn: () => userAPI.logout()
    })
};

export default userOptions;
