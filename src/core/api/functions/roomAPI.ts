import { baseInstance } from '../instance';

export const roomAPI = {
  fetchRoomDetail: async (roomId: string) => {
    const { data } = await baseInstance.get(`/rooms/${roomId}`);

    return data;
  }
};
