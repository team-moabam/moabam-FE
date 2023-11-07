export interface ParticipateRoom {
  roomId: number;
  title: string;
  type: 'MORNING' | 'NIGHT';
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  isCertifiedToday: boolean;
  bug: number; // TODO: 오늘 획득한 벌레 수, 업데이트 예정
}

export interface MyJoinRoom {
  participateRooms: ParticipateRoom[];
  bugs: number; // TODO: 오늘 획득한 총 벌레 수, 업데이트 예정
}
