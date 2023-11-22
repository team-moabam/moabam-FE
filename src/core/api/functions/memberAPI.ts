import { baseInstance } from '../instance';

const memberAPI = {
  getMyInfo: async () => {
    // TODO: 실제 API 호출 결과를 보고 제네릭에 타입을 넣어줘야 해요. (Response Data)
    return await baseInstance.get('/members');
  },
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
