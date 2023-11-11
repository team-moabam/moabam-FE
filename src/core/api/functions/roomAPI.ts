import { baseInstance } from '../instance';
import { RoomInfo } from '@/core/types/Room';

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
  putRoom: async (params: {
    roomId: number;
    title: string;
    announcement: string;
    routine: string[];
    password: string;
    certifyTime: number;
    maxUserCount: number;
  }) => {
    const { roomId, ...body } = params;
    return await baseInstance.put(`/rooms/${roomId}`, body);
  },
  getRoomDetail: async (roomId: number) => {
    return await baseInstance.get<RoomInfo>(`/rooms/${roomId}`);
  }
};

export default roomAPI;
