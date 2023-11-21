import { baseInstance } from '../instance';

const userAPI = {
  getUser: async (userId = '') => {
    return await baseInstance.get(`/members${userId ?? '/'}${userId}`);
  },
  putUser: async (body: {
    nickname?: string;
    intro?: string;
    profile_image?: string;
  }) => {
    return await baseInstance.put(`/members`, body);
  },
  logout: async () => {
    return await baseInstance.get(`/members/logout`);
  },
  Withdrawal: async () => {
    return await baseInstance.delete(`/members`);
  }
};

export default userAPI;
