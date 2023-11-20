import { baseInstance } from '../instance';

const memberAPI = {
  postMemberKakaoAuth: async (params: { code: string }) => {
    const { code } = params;

    return await baseInstance.post<{ signUp: boolean; memberId: number }>(
      `/members/login/kakao/oauth`,
      {
        code
      }
    );
  }
};

export default memberAPI;
