import {
  RoomsAllRequestParams,
  RoomsSearchRequestParams,
  TotalRooms
} from '@/core/types';
import { ParticipateHistory } from '@/core/types';
import { MyJoinRoom } from '@/core/types/MyJoinRoom';
import {
  RoomInfo,
  RoomInfoBeforeEditing,
  RoomSemiInfo
} from '@/core/types/Room';
import { baseInstance, formDataInstance } from '../instance';

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

  deleteKickUser: async (params: { roomId: string; memberId: number }) => {
    const { roomId, memberId } = params;
    return await baseInstance.delete(`/rooms/${roomId}/members/${memberId}`);
  },

  putMandateMaster: async (params: { roomId: string; memberId: number }) => {
    const { roomId, memberId } = params;
    return await baseInstance.put(
      `/rooms/${roomId}/members/${memberId}/mandate`
    );
  },

  getMemberPoke: async (roomId: string, memberId: number) => {
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
  },

  roomJoinHistory: async () => {
    return await baseInstance.get<ParticipateHistory>(`/rooms/join-history`);
  },

  postRoomJoin: async (params: {
    roomId: string;
    body: { password: string | null };
  }) => {
    const { roomId, body } = params;
    return await baseInstance.post<{ message: string }>(
      `/rooms/${roomId}`,
      body
    );
  },

  getCheckRoomJoin: async (roomId?: string) => {
    return await baseInstance.get(`/rooms/${roomId}/check`);
  },

  getRoomSemiDetail: async (roomId?: string) => {
    return await baseInstance.get<RoomSemiInfo>(`/rooms/${roomId}/un-joined`);
  }
};

export default roomAPI;
