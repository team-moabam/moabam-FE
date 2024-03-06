export const RoomInfo = {
  roomId: 32,
  roomCreatedAt: '2023-11-28T13:36:49.783842',
  title: '윤명이의 루틴방',
  managerNickName: '오목눈이#U8WN6I',
  roomImage: '/assets/background/room-level-03.png',
  level: 5,
  currentExp: 4,
  totalExp: 80,
  roomType: 'MORNING',
  certifyTime: 0,
  currentUserCount: 5,
  maxUserCount: 9,
  announcement:
    '2번 연속 인증 안하는 사람은 추방할 예정입니다 ㅅㄱ!공지를 한번 길게 써보겠습니다! 공지가 길면 열려야 해요',
  completePercentage: 66.7,
  certifiedDates: ['2023-11-28', '2023-11-29', '2023-11-30'],
  routines: [
    {
      routineId: 8,
      content: '물 마시기'
    },
    {
      routineId: 9,
      content: '아침 먹기'
    },
    {
      routineId: 10,
      content: '일찍 일어나기'
    }
  ],
  todayCertificateRank: [
    {
      rank: 1,
      memberId: 19,
      nickname: '오목눈이#U8WN6I',
      isNotificationSent: false,
      profileImage: '/assets/user.png',
      contributionPoint: 100,
      awakeImage: '/assets/skins/awakeOmokSkin0.png',
      sleepImage: '/assets/skins/sleepOmokSkin0.png',
      certificationImage: null
    },
    {
      rank: 2,
      memberId: 109,
      nickname: '오목눈이#U8WN6H',
      isNotificationSent: true,
      profileImage: '/assets/user.png',
      contributionPoint: 100,
      awakeImage: '/assets/skins/eggOmok.png',
      sleepImage: '/assets/skins/eggOmok.png',
      certificationImage: {
        images: [
          {
            routineId: 8,
            image:
              'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202204/07/dd8b47d5-1c8b-489c-bb98-feadc613cf62.jpg'
          },
          {
            routineId: 9,
            image:
              'https://img.hani.co.kr/imgdb/resize/2016/0318/145820136237_20160318.JPG'
          },
          {
            routineId: 10,
            image:
              'https://cdn.kormedi.com/wp-content/uploads/2023/06/unnamed-file-152-700x467.jpg.webp'
          }
        ]
      }
    },
    {
      rank: 3,
      memberId: 5,
      nickname: '오목눈이#U8WN6J',
      isNotificationSent: false,
      profileImage: '/assets/user.png',
      contributionPoint: 100,
      awakeImage: '/assets/skins/awakeOmokSkin3.png',
      sleepImage: '/assets/skins/sleepOmokSkin3.png',
      certificationImage: {
        images: [
          {
            routineId: 8,
            image:
              'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202204/07/dd8b47d5-1c8b-489c-bb98-feadc613cf62.jpg'
          },
          {
            routineId: 9,
            image:
              'https://img.hani.co.kr/imgdb/resize/2016/0318/145820136237_20160318.JPG'
          },
          {
            routineId: 10,
            image:
              'https://cdn.kormedi.com/wp-content/uploads/2023/06/unnamed-file-152-700x467.jpg.webp'
          }
        ]
      }
    }
  ]
};

export const RoomInfoBeforeEditing = {
  roomId: 3,
  title: '재맹이의 방',
  announcement: '방의 공지사항입니다!',
  roomType: 'MORNING',
  certifyTime: 5,
  maxUserCount: 10,
  password: '1234',
  routines: [
    {
      routineId: 8,
      content: '물 마시기'
    },
    {
      routineId: 9,
      content: '아침 먹기'
    },
    {
      routineId: 9,
      content: '일찍 일어나기'
    }
  ],
  managerId: 6,
  participants: [
    {
      memberId: 4,
      nickname: '참여자1',
      contributionPoint: 70,
      profileImage: '/assets/user.png'
    },
    {
      memberId: 6,
      nickname: '방장',
      contributionPoint: 99,
      profileImage: '/assets/user.png'
    },
    {
      memberId: 8,
      nickname: '참여자2',
      contributionPoint: 70,
      profileImage: '/assets/user.png'
    }
  ]
};

export const RoomInfoBeforeEditing2 = {
  roomId: 5,
  title: '후니의 방',
  announcement: '방의 공지사항입니다!',
  roomType: 'NIGHT',
  certifyTime: 0,
  maxUserCount: 10,
  password: '1234',
  routines: [
    {
      routineId: 8,
      content: '물 마시기'
    },
    {
      routineId: 9,
      content: '아침 먹기'
    },
    {
      routineId: 9,
      content: '일찍 일어나기'
    }
  ],
  managerId: 6,
  participants: [
    {
      memberId: 4,
      nickname: '참여자1',
      contributionPoint: 70,
      profileImage: '/assets/user.png'
    },
    {
      memberId: 6,
      nickname: '방장',
      contributionPoint: 99,
      profileImage: '/assets/user.png'
    },
    {
      memberId: 8,
      nickname: '참여자2',
      contributionPoint: 70,
      profileImage: '/assets/user.png'
    }
  ]
};

export const RoomSemiInfo = {
  roomId: 3,
  isPassword: true,
  title: '하윙 방',
  roomImage: '/assets/background/room-level-00.png',
  level: 3,
  currentExp: 4,
  totalExp: 80,
  roomType: 'MORNING',
  certifyTime: 7,
  currentUserCount: 6,
  maxUserCount: 10,
  announcement: '얼른 인증하셈',
  routines: [
    {
      routineId: 8,
      content: '물 마시기'
    },
    {
      routineId: 9,
      content: '아침 먹기'
    },
    {
      routineId: 10,
      content: '일찍 일어나기'
    }
  ],
  certifiedRanks: [
    {
      rank: 1,
      memberId: 3,
      nickname: '오목이123',
      awakeImage: '/assets/skins/awakeOmokSkin0.png',
      sleepImage: '/assets/skins/sleepOmokSkin0.png'
    },
    {
      rank: 2,
      memberId: 6,
      nickname: '오목이83838',
      awakeImage: '/assets/skins/awakeOmokSkin3.png',
      sleepImage: '/assets/skins/sleepOmokSkin3.png'
    }
  ]
};
