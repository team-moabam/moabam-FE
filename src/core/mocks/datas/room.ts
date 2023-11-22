export const ROOM_INFO = {
  roomId: 32,
  title: '윤명이의 루틴방',
  managerNickname: '재영',
  roomImage: 'https://picsum.photos/200',
  level: 5,
  roomType: 'MORNING',
  certifyTime: 9,
  currentUserCount: 5,
  maxUserCount: 9,
  announcement: '2번 연속 인증 안하는 사람은 추방할 예정입니다 ㅅㄱ!',
  completePercentage: 66.7,
  certifiedDates: ['2023-03-02', '2023-03-03', '2023-03-02'],
  routine: [
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
      profileImage: 'https://picsum.photos/200',
      contributionPoint: 65,
      awakeImage: 'https://picsum.photos/200',
      sleepImage: 'https://picsum.photos/200',
      certificationImage: [
        {
          routineId: 5,
          image: null
        },
        {
          routineId: 9,
          image: null
        }
      ]
    },
    {
      rank: 2,
      memberId: '1',
      nickname: '랄라랄',
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
      rank: 10,
      memberId: '7',
      nickname: '하윙',
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
        },
        {
          routineId: 13,
          image: null
        },
        {
          routineId: 16,
          image: null
        }
      ]
    },
    {
      rank: 500,
      memberId: '9',
      nickname: '명재',
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
  participants: [
    {
      memberId: 4,
      nickname: '참여자1',
      contributionPoint: 70,
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
