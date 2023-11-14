import { DayType } from './Room';

export interface ParticipatingRoom {
  roomId: number;
  title: string;
  type: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  isCertifiedToday: boolean;
  bug: number; // TODO: 오늘 획득한 벌레 수, 업데이트 예정
}

export interface MyJoinRoom {
  participatingRooms: ParticipatingRoom[];
}
