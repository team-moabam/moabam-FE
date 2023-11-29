import { baseInstance } from '../instance';

const notificationAPI = {
  postFCMToken: async (params: { fcmToken: string }) => {
    return await baseInstance.post(`/notifications`, null, {
      params
    });
  },
  getMemberPoke: async (roomId: string, memberId: number) => {
    return await baseInstance.get(
      `/notifications/rooms/${roomId}/members/${memberId}`
    );
  }
};

export default notificationAPI;
