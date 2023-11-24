import { MyJoinRoom } from '@/core/types/MyJoinRoom';

export const MY_JOIN_ROOMS: MyJoinRoom = {
  participatingRooms: [
    {
      roomId: 32,
      title: '윤명이의 루틴방',
      roomType: 'MORNING',
      certifyTime: 9,
      currentUserCount: 5,
      maxUserCount: 9,
      isMemberCertifiedToday: true,
      isRoomCertifiedToday: true,
      obtainedBugs: 5
    },
    {
      roomId: 22,
      title: '재준이의 루틴방',
      roomType: 'NIGHT',
      certifyTime: 22,
      currentUserCount: 5,
      maxUserCount: 9,
      isMemberCertifiedToday: true,
      isRoomCertifiedToday: true,
      obtainedBugs: 4
    },
    {
      roomId: 15,
      title: '방이름이엄청나게긴루틴방이랍니다하하하하',
      roomType: 'NIGHT',
      certifyTime: 2,
      currentUserCount: 4,
      maxUserCount: 10,
      isMemberCertifiedToday: true,
      isRoomCertifiedToday: false,
      obtainedBugs: 0
    },
    {
      roomId: 12,
      title: '프롱이 루틴 방입니다',
      roomType: 'MORNING',
      certifyTime: 10,
      currentUserCount: 4,
      maxUserCount: 6,
      isMemberCertifiedToday: true,
      isRoomCertifiedToday: true,
      obtainedBugs: 4
    },
    {
      roomId: 26,
      title: '밤프롱이의 루틴방',
      roomType: 'NIGHT',
      certifyTime: 23,
      currentUserCount: 4,
      maxUserCount: 6,
      isMemberCertifiedToday: false,
      isRoomCertifiedToday: false,
      obtainedBugs: 0
    }
  ]
};
