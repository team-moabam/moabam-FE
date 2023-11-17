import { DayType } from './Room';

export interface ParticipatingRoom {
  roomId: number;
  title: string;
  roomType: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  isMemberCertifiedToday: boolean;
  isRoomCertifiedToday: boolean;
  obtainedBugs: number;
}

export interface MyJoinRoom {
  participatingRooms: ParticipatingRoom[];
}
