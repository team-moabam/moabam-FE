import type { MyJoinRoom } from './types/myJoinRoom';

export const myJoinRoom: MyJoinRoom = {
  bugs: 5,
  participateRooms: [
    {
      roomId: 32,
      title: '윤명이의 루틴방',
      type: 'MORNING',
      certifyTime: 9,
      currentUserCount: 5,
      maxUserCount: 9,
      isCertifiedToday: true,
      bug: 5
    },
    {
      roomId: 22,
      title: '재준이의 루틴방',
      type: 'NIGHT',
      certifyTime: 22,
      currentUserCount: 5,
      maxUserCount: 9,
      isCertifiedToday: false,
      bug: 0
    },
    {
      roomId: 15,
      title: '방이름이엄청나게긴루틴방이랍니다하하하하',
      type: 'MORNING',
      certifyTime: 9,
      currentUserCount: 4,
      maxUserCount: 10,
      isCertifiedToday: true,
      bug: 3
    }
  ]
};
