import {
  RoomsAllRequestParams,
  RoomsSearchRequestParams,
  TotalRooms
} from '@/core/types';
import { baseInstance, formDataInstance } from '../instance';
import { MyJoinRoom } from '@/core/types/MyJoinRoom';
import { ParticipateHistoryType } from '@/core/types/participateLog';
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
    return await baseInstance.post<number>('/rooms', body);
  },

  getRoomDetail: async (roomId: string) => {
    return await baseInstance.get<RoomInfoBeforeEditing>(`/rooms/${roomId}`);
  },

  getRoomDetailByDate: async (roomId: string | undefined, date: string) => {
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

  roomJoinHistory: async () => {
    return await baseInstance.get<ParticipateHistoryType>(
      `/rooms/join-history`
    );

  getMemberPoke: async (roomId: string, memberId: string) => {
    return await baseInstance.get(`/rooms/${roomId}/${memberId}`);
  },

  postRoutineCertificate: async (params: {
    roomId: string;
    body: FormData;
  }) => {
    const { roomId, body } = params;
    return await formDataInstance.post<{ message: string }>(
      `/rooms/${roomId}/certification`,
      body
    );
  },

  getRoomsAll: async (params?: RoomsAllRequestParams) => {
    return await baseInstance.get<TotalRooms>('/rooms', { params });
  },

  getRoomsSearch: async (params?: RoomsSearchRequestParams) => {
    return await baseInstance.get<TotalRooms>('/rooms/search', { params });
  }
};

export default roomAPI;
