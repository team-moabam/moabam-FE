import { DayType } from '.';

export interface Room {
  id: number;
  title: string;
  managerNickname: string;
  level: number;
  roomType: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  routine: {
    routineId: number;
    content: string;
  }[];
}

export interface TotalRooms {
  rooms: Room[];
}

export interface RoomsRequestParams {
  type?: 'morning' | 'night' | 'all';
  page?: number;
  size?: number;
}
