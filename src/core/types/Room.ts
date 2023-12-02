import { RankMember, RankMemberSemi } from './Member';

export type DayType = 'MORNING' | 'NIGHT';

export type RoomInfo = {
  announcement: string;
  certifiedDates: string[];
  certifyTime: number;
  completePercentage: number;
  currentUserCount: number;
  exp: number;
  level: number;
  managerNickName: string;
  maxUserCount: number;
  myMemberId: number;
  roomCreatedAt: string;
  roomId: number;
  roomImage: string;
  roomType: DayType;
  routines: { routineId: number; content: string }[];
  title: string;
  todayCertificateRank: RankMember[];
};

export type RoomSemiInfo = {
  roomId: number;
  isPassword: boolean;
  title: string;
  announcement: string;
  certifiedRanks: RankMemberSemi[];
  certifyTime: number;
  currentUserCount: number;
  exp: number;
  level: number;
  maxUserCount: number;
  roomImage: 'https://image.moabam.com/moabam/default/room-level-00.png';
  roomType: DayType;
  routines: { routineId: number; content: string }[];
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
