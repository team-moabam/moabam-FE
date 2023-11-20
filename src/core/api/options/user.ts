import { queryOptions } from '@tanstack/react-query';
import userAPI from '../functions/userAPI';

const userOptions = {
  user: (userId: string) =>
    queryOptions({
      queryKey: ['user', userId] as const,
      queryFn: () => userAPI.getUser(userId)
    }),
  edit: (body: { nickname?: string; intro?: string; profile_image?: string }) =>
    queryOptions({
      queryKey: ['user', 'edit'] as const,
      queryFn: () => userAPI.putUser(body)
    }),
  logout: () =>
    queryOptions({
      queryKey: ['user', 'logout'] as const,
      queryFn: () => userAPI.logout()
    }),
  Withdrawal: () =>
    queryOptions({
      queryKey: ['user', 'Withdrawal'] as const,
      queryFn: () => userAPI.Withdrawal()
    })
};

export default userOptions;
