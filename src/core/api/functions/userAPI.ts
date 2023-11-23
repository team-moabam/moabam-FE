import { baseInstance } from '../instance';
import { User } from '@/core/types/User';

const userAPI = {
  getUser: async (userId = '') => {
    return await baseInstance.get<User>(
      `/members${userId ? '/' : ''}${userId}`
    );
  },
  editUser: async (body: {
    nickname?: string;
    intro?: string;
    profile_image?: string;
  }) => {
    return await baseInstance.post(`/members/modify`, body);
  },
  logout: async () => {
    return await baseInstance.get(`/members/logout`);
  },
  Withdrawal: async () => {
    return await baseInstance.delete(`/members`);
  }
};

export default userAPI;
