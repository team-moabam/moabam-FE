import { RoomsRequestParams, TotalRooms } from '@/core/types';
import { baseInstance } from '../instance';
import { MyJoinRoom } from '@/core/types/MyJoinRoom';
import { RoomInfo, RoomInfoBeforeEditing } from '@/core/types/Room';

const roomAPI = {
  postRoom: async (body: {
    title: string;
    password: string;
    roomType: string;
    routines: string[];
    certifyTime: number;
    maxUserCount: number;
  }) => {
    return await baseInstance.post<{ roomId: number }>('/rooms', body);
  },

  getRoomDetail: async (roomId: string) => {
    return await baseInstance.get<RoomInfoBeforeEditing>(`/rooms/${roomId}`);
  },

  getRoomDetailByDate: async (roomId: string, date: string) => {
    return await baseInstance.get<RoomInfo>(`/rooms/${roomId}/${date}`);
  },

  putRoom: async (params: {
    roomId: string;
    title: string;
    announcement: string;
    routines: string[];
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
  },

  getRoomsAll: async (params?: RoomsRequestParams) => {
    return await baseInstance.get<TotalRooms>('/rooms', { params });
  }
};

export default roomAPI;
