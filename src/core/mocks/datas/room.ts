export const RoomInfo = {
  roomId: 32,
  title: '윤명이의 루틴방',
  managerNickName: '재영',
  roomImage: 'https://picsum.photos/200',
  level: 5,
  exp: 4,
  roomType: 'MORNING',
  certifyTime: 9,
  currentUserCount: 5,
  maxUserCount: 9,
  announcement: '2번 연속 인증 안하는 사람은 추방할 예정입니다 ㅅㄱ!',
  completePercentage: 66.7,
  certifiedDates: ['2023-11-13', '2023-11-14', '2023-11-16'],
  routines: [
    {
      routineId: 5,
      content: '물 마시기'
    },
    {
      routineId: 9,
      content: '아침 먹기'
    }
  ],
  todayCertificateRank: [
    {
      rank: 1,
      memberId: '5',
      nickname: '재영',
      isNotificationSent: true,
      profileImage: 'https://picsum.photos/200',
      contributionPoint: 65,
      awakeImage: 'https://picsum.photos/200',
      sleepImage: 'https://picsum.photos/200',
      certificationImage: [
        {
          routineId: 5,
          image: 'https://picsum.photos/200'
        },
        {
          routineId: 9,
          image: 'https://picsum.photos/200'
        }
      ]
    },
    {
      rank: 2,
      memberId: '1',
      nickname: '랄라랄',
      isNotificationSent: false,
      profileImage: 'https://picsum.photos/200',
      contributionPoint: 80,
      awakeImage: 'https://picsum.photos/200',
      sleepImage: 'https://picsum.photos/200',
      certificationImage: [
        {
          routineId: 5,
          image: 'https://picsum.photos/200'
        },
        {
          routineId: 9,
          image: 'https://picsum.photos/200'
        }
      ]
    },
    {
      rank: 3,
      memberId: '7',
      nickname: '하윙',
      isNotificationSent: false,
      profileImage: 'https://picsum.photos/200',
      contributionPoint: 30,
      awakeImage: 'https://picsum.photos/200',
      sleepImage: 'https://picsum.photos/200',
      certificationImage: [
        {
          routineId: 5,
          image: 'https://picsum.photos/200'
        },
        {
          routineId: 9,
          image: 'https://picsum.photos/200'
        }
      ]
    },
    {
      rank: 500,
      memberId: '9',
      nickname: '명재',
      isNotificationSent: true,
      profileImage: 'https://picsum.photos/200',
      contributionPoint: 90,
      awakeImage: 'https://picsum.photos/200',
      sleepImage: 'https://picsum.photos/200',
      certificationImage: null
    },
    {
      rank: 500,
      memberId: '4',
      nickname: '홍홍',
      isNotificationSent: false,
      profileImage: 'https://picsum.photos/200',
      contributionPoint: 50,
      awakeImage: 'https://picsum.photos/200',
      sleepImage: 'https://picsum.photos/200',
      certificationImage: null
    }
  ]
};

export const RoomInfoBeforeEditing = {
  roomId: 3,
  title: '재맹이의 방',
  announcement: '방의 공지사항입니다!',
  roomType: 'MORNING',
  certifyTime: 9,
  maxUserCount: 10,
  password: '1234',
  routines: [
    {
      routineId: 5,
      content: '물 마시기'
    },
    {
      routineId: 9,
      content: '아침 먹기'
    }
  ],
  managerId: 6,
  participants: [
    {
      memberId: 4,
      nickname: '참여자1',
      contributionPoint: 70,
      profileImage: 'https://~'
    },
    {
      memberId: 6,
      nickname: '방장',
      contributionPoint: 99,
      profileImage: 'https://~'
    },
    {
      memberId: 8,
      nickname: '참여자2',
      contributionPoint: 70,
      profileImage: 'https://~'
    }
  ]
};

export const RoomSemiInfo = {
  roomId: 3,
  isPassword: true,
  title: '하윙 방',
  roomImage: 'https://~',
  level: 3,
  exp: 6,
  roomType: 'MORNING',
  certifyTime: 7,
  currentUserCount: 6,
  maxUserCount: 10,
  announcement: '얼른 인증하셈',
  routines: [
    {
      routineId: 5,
      content: '물 마시기'
    },
    {
      routineId: 9,
      content: '아침 먹기'
    }
  ],
  certifiedRanks: [
    {
      rank: 1,
      memberId: 3,
      nickname: '오목이123',
      awakeImage: 'https://~',
      sleepImage: 'https://~'
    },
    {
      rank: 2,
      memberId: 6,
      nickname: '오목이83838',
      awakeImage: 'https://~',
      sleepImage: 'https://~'
    }
  ]
};
