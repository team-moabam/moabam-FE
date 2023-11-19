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

  getRoomDetail: async (roomId: string, date?: string) => {
    return await baseInstance.get<RoomInfo>(
      `/rooms/${roomId}${date ? `/${date}` : ''}`
    );
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

  getMyJoinRoom: async () => {
    return await baseInstance.get<MyJoinRoom>('/rooms/my-join');
  },

  deleteRoom: async (roomId: string) => {
    return await baseInstance.delete(`/rooms/${roomId}`);
  },

  deleteKickUser: async (params: { roomId: string; memberId: string }) => {
    const { roomId, memberId } = params;
    return await baseInstance.delete(`/rooms/${roomId}/members/${memberId}`);
  },

  putDelegateMaster: async (params: { roomId: string; memberId: string }) => {
    const { roomId, memberId } = params;
    return await baseInstance.put(
      `/rooms/${roomId}/members/${memberId}/delegation`
    );
  }
};

export default roomAPI;
