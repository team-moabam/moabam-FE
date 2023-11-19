import { DayType } from '.';

export type RoomSelectType = 'morning' | 'night' | 'all';

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
  routine: {
    routineId: number;
    content: string;
  }[];
}

export interface TotalRooms {
  hasNext: boolean;
  rooms: Room[];
}

export interface RoomsRequestParams {
  type?: RoomSelectType;
  roomId?: number;
  keyword?: string;
}
