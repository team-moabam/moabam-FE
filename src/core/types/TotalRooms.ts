import { DayType } from '.';

export type RoomSelectType = 'morning' | 'night' | 'all';

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
  type?: RoomSelectType;
  page?: number;
  size?: number;
}
