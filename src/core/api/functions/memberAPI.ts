import { baseInstance } from '../instance';

const memberAPI = {
  getMemberKakaoAuth: async (params: { code: string }) => {
    const { code } = params;
    return await baseInstance.get(`/members/login/kakao/oauth?code=${code}`);
  }
};

export default memberAPI;
