import type { Room } from './types/rooms';

export const totalRooms: {
  rooms: Room[];
} = {
  rooms: [
    {
      id: 11,
      title: '재윤이의 루틴방',
      managerNickname: 'DevUNI',
      level: 5,
      type: 'MORNING',
      certifyTime: 8,
      currentUserCount: 5,
      maxUserCount: 9,
      routine: [
        {
          routineId: 5,
          content: '물 마시기'
        },
        {
          routineId: 9,
          content: '아침 먹기'
        }
      ]
    },
    {
      id: 10,
      title: '프롱루틴방',
      managerNickname: 'Frong',
      level: 4,
      type: 'MORNING',
      certifyTime: 9,
      currentUserCount: 4,
      maxUserCount: 10,
      routine: [
        {
          routineId: 5,
          content: 'PR 올리기'
        },
        {
          routineId: 9,
          content: '코드 리뷰하기'
        }
      ]
    },
    {
      id: 15,
      title: '방이름이엄청나게긴루틴방이랍니다하하하하',
      managerNickname: 'long_Frong',
      level: 5,
      type: 'MORNING',
      certifyTime: 9,
      currentUserCount: 4,
      maxUserCount: 10,
      routine: [
        {
          routineId: 5,
          content: 'PR 올리기'
        },
        {
          routineId: 9,
          content: '코드 리뷰하기'
        }
      ]
    },
    {
      id: 12,
      title: '영명이의 루틴방',
      managerNickname: 'ymkim',
      level: 7,
      type: 'NIGHT',
      certifyTime: 21,
      currentUserCount: 4,
      maxUserCount: 10,
      routine: [
        {
          routineId: 5,
          content: '물 마시기'
        },
        {
          routineId: 9,
          content: '아침 먹기'
        }
      ]
    },
    {
      id: 20,
      title: '홍박사의 루틴방',
      managerNickname: 'HongJJANG',
      level: 4,
      type: 'NIGHT',
      certifyTime: 1,
      currentUserCount: 4,
      maxUserCount: 7,
      routine: [
        {
          routineId: 5,
          content: '물 마시기'
        },
        {
          routineId: 9,
          content: '아침 먹기'
        }
      ]
    }
  ]
};
