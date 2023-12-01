export const RoomInfo = {
  roomId: 32,
  title: '윤명이의 루틴방',
  managerNickName: '오목눈이#U8WN6I',
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
      memberId: 5,
      nickname: '오목눈이#U8WN6I',
      isNotificationSent: false,
      profileImage:
        'https://image.moabam.com/moabam/default/member-profile.png',
      contributionPoint: 100,
      awakeImage:
        'https://image.moabam.com/moabam/skins/owl/default/eyes-opened.png',
      sleepImage:
        'https://image.moabam.com/moabam/skins/owl/default/eyes-opened.png',
      certificationImage: null
    },
    {
      rank: 2,
      memberId: 6,
      nickname: '오목눈이#U8WN6H',
      isNotificationSent: false,
      profileImage:
        'https://image.moabam.com/moabam/default/member-profile.png',
      contributionPoint: 100,
      awakeImage:
        'https://image.moabam.com/moabam/skins/owl/santa/eyes-opened.png',
      sleepImage:
        'https://image.moabam.com/moabam/skins/owl/santa/eyes-opened.png',
      certificationImage: {
        images: [
          {
            routineId: 8,
            image:
              'https://image.moabam.com/certifications/2023-11-30/8_e15719e3-83f8-4cdc-b4a6-5511290d8a4a.png'
          },
          {
            routineId: 9,
            image:
              'https://image.moabam.com/certifications/2023-11-30/9_a78ddf52-854c-4a89-af6b-96b1ff418997.png'
          },
          {
            routineId: 10,
            image:
              'https://image.moabam.com/certifications/2023-11-30/10_0c0046d4-76e2-43cb-8e2e-0e4adafd45bf.png'
          }
        ]
      }
    },
    {
      rank: 3,
      memberId: 10,
      nickname: '오목눈이#U8WN6J',
      isNotificationSent: false,
      profileImage:
        'https://image.moabam.com/moabam/default/member-profile.png',
      contributionPoint: 100,
      awakeImage:
        'https://image.moabam.com/moabam/skins/owl/santa/eyes-opened.png',
      sleepImage:
        'https://image.moabam.com/moabam/skins/owl/santa/eyes-opened.png',
      certificationImage: {
        images: [
          {
            routineId: 8,
            image:
              'https://image.moabam.com/certifications/2023-11-30/8_e15719e3-83f8-4cdc-b4a6-5511290d8a4a.png'
          },
          {
            routineId: 9,
            image:
              'https://image.moabam.com/certifications/2023-11-30/9_a78ddf52-854c-4a89-af6b-96b1ff418997.png'
          },
          {
            routineId: 10,
            image:
              'https://image.moabam.com/certifications/2023-11-30/10_0c0046d4-76e2-43cb-8e2e-0e4adafd45bf.png'
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
  certifyTime: 9,
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
