import { baseInstance } from '../instance';
import { MemberInfo, MyInfo } from '@/core/types/Member';

const memberAPI = {
  getMyInfo: async () => {
    return await baseInstance.get<MyInfo>('/members');
  },

  getMemberInfo: async (memberId = '') => {
    return await baseInstance.get<MemberInfo>(
      `/members${memberId ? '/' : ''}${memberId}`
    );
  },

  postMemberKakaoAuth: async (params: { code: string }) => {
    const { code } = params;

    return await baseInstance.post<{ signUp: boolean; id: number }>(
      `/members/login/kakao/oauth`,
      {
        code
      }
    );
  },

  editMyInfo: async (formData: FormData) => {
    return await baseInstance.post(`/members/modify`, formData);
  },

  logout: async () => {
    return await baseInstance.get(`/members/logout`);
  },

  Withdrawal: async () => {
    return await baseInstance.delete(`/members`);
  }
};

export default memberAPI;
