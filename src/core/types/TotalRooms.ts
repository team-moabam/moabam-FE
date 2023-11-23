import { DayType } from '.';

export type RoomSelectType = 'ALL' | 'MORNING' | 'NIGHT';

export interface Room {
  id: number;
  title: string;
  image: string;
  isPassword: boolean;
  managerNickname: string;
  level: number;
  roomType: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  routines: {
    routineId: number;
    content: string;
  }[];
}

export interface TotalRooms {
  hasNext: boolean;
  rooms: Room[];
}

export interface RoomsAllRequestParams {
  roomType?: RoomSelectType;
  roomId?: number;
}

export interface RoomsSearchRequestParams {
  roomType?: RoomSelectType;
  roomId?: number;
  keyword?: string;
}
