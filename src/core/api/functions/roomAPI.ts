import { baseInstance } from '../instance';

export const roomAPI = {
  getRoomDetail: async (roomId: string) => {
    return await baseInstance.get(`/rooms/${roomId}`);
  }
};
