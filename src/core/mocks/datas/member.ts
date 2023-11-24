import { MemberInfo, MyInfo } from '@/core/types';

export const MY_INFO: MyInfo = {
  nickname: '자려고 사는 사람',
  intro: '너무나 졸린사람',
  level: 3,
  exp: 6,
  birds: {
    MORNING:
      'https://i.pinimg.com/564x/9d/1d/81/9d1d81196806e7a2829f94f67ccc3248.jpg',
    NIGHT:
      'https://i.pinimg.com/564x/f4/9d/21/f49d217cae2f110e8acee4ed1f120483.jpg'
  },
  badges: [
    {
      name: '오목눈이_탄생',
      unlock: true
    },
    {
      name: '어른_오목눈이',
      unlock: false
    },
    {
      name: '어른_부엉이',
      unlock: true
    },
    {
      name: '부엉이_탄생',
      unlock: true
    }
  ],
  profileImage: undefined,
  golden_bug: 3,
  morning_bug: 4,
  night_bug: 5
};

export const MEMBER_INFO: MemberInfo = {
  nickname: '죽으려고 사는 사람',
  intro: '으앙',
  level: 4,
  exp: 6,
  birds: {
    MORNING:
      'https://i.pinimg.com/564x/9d/1d/81/9d1d81196806e7a2829f94f67ccc3248.jpg',
    NIGHT:
      'https://i.pinimg.com/564x/f4/9d/21/f49d217cae2f110e8acee4ed1f120483.jpg'
  },
  badges: [
    {
      name: '오목눈이_탄생',
      unlock: true
    },
    {
      name: '어른_오목눈이',
      unlock: false
    },
    {
      name: '어른_부엉이',
      unlock: true
    },
    {
      name: '부엉이_탄생',
      unlock: true
    }
  ],
  profileImage: undefined
};
