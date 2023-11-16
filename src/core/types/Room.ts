import { RankMember } from './Member';

export type DayType = 'MORNING' | 'NIGHT';

export type RoomInfo = {
  roomId: number;
  title: string;
  managerNickname: string;
  level: number;
  roomType: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  announcement: string;
  completePercentage: number;
  certifiedDates: string[];
  routine: { routineId: number; content: string }[];
  todayCertificateRank: RankMember[];
};
