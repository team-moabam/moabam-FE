import { baseInstance } from '../instance';

const notificationAPI = {
  postFCMToken: async (params: { fcmToken: string }) => {
    return await baseInstance.post(`/notifications?${params.fcmToken}`);
  }
};

export default notificationAPI;
