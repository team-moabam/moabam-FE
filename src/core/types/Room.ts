import { RankMember } from './Member';

export type DayType = 'MORNING' | 'NIGHT';

export type RoomInfo = {
  roomId: number;
  title: string;
  managerNickname: string;
  level: number;
  exp: number;
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

export type RoomSemiInfo = {
  roomId: number;
  isPassword: boolean;
  title: string;
  managerNickname: string;
  level: number;
  exp: number;
  roomType: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  announcement: string;
  routine: { routineId: number; content: string }[];
  certificateRank: RankMember[];
};

export type RoomInfoBeforeEditing = {
  roomId: number;
  title: string;
  announcement: string;
  roomType: DayType;
  certifyTime: number;
  maxUserCount: number;
  password: string;
  routines: { routineId: number; content: string }[];
  participants: {
    memberId: number;
    nickname: string;
    contributionPoint: number;
    profileImage: string;
  }[];
};
