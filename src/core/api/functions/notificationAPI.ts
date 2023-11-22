import { baseInstance } from '../instance';

const notificationAPI = {
  postFCMToken: async (params: { fcmToken: string }) => {
    return await baseInstance.post(`/notifications`, null, {
      params
    });
  }
};

export default notificationAPI;
