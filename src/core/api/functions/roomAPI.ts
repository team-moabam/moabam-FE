import { baseInstance } from '../instance';
import { MyJoinRoom } from '@/core/types/MyJoinRoom';
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
    roomId: string;
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
  getRoomDetail: async (roomId: string) => {
    return await baseInstance.get<RoomInfo>(`/rooms/${roomId}`);
  },
  getMyJoinRoom: async () => {
    return await baseInstance.get<MyJoinRoom>('/rooms/my-join');
  }
};

export default roomAPI;
