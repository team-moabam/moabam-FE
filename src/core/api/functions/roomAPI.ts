import { baseInstance } from '../instance';

const roomAPI = {
  postRoom: async (body: {
    title: string;
    password: string;
    type: string;
    routine: string[];
    certifyTime: number;
    maxUserCount: number;
  }) => {
    return await baseInstance.post<{ message: string }>('/rooms', body);
  },
  getRoomDetail: async (roomId: string) => {
    return await baseInstance.get(`/rooms/${roomId}`);
  }
};

export default roomAPI;
