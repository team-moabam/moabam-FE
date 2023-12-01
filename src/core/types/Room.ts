import { RankMember, RankMemberSemi } from './Member';

export type DayType = 'MORNING' | 'NIGHT';

export type RoomInfo = {
  roomId: number;
  roomCreatedAt: string;
  title: string;
  managerNickName: string;
  level: number;
  exp: number;
  roomType: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  announcement: string;
  completePercentage: number;
  certifiedDates: string[];
  routines: { routineId: number; content: string }[];
  todayCertificateRank: RankMember[];
};

export type RoomSemiInfo = {
  roomId: number;
  isPassword: boolean;
  title: string;
  managerNickName: string;
  level: number;
  exp: number;
  roomType: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  announcement: string;
  routines: { routineId: number; content: string }[];
  certifiedRanks: RankMemberSemi[];
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
  managerId: number;
  participants: {
    memberId: number;
    nickname: string;
    contributionPoint: number;
    profileImage: string;
  }[];
};
