import { ItemType } from '@/core/types';

export const birdItems: {
  MORNING: {
    defaultItemId: string;
    purchasedItems: ItemType[];
    notPurchasedItems: ItemType[];
  };
  NIGHT: {
    defaultItemId: string;
    purchasedItems: ItemType[];
    notPurchasedItems: ItemType[];
  };
} = {
  MORNING: {
    defaultItemId: '1',
    purchasedItems: [
      {
        id: '1',
        type: 'MORNING',
        category: 'SKIN',
        name: '오목눈이',
        image: 'public/assets/skins/awakeOmokSkin0.png',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '2',
        type: 'MORNING',
        category: 'SKIN',
        name: '목도리 오목눈이',
        image: 'public/assets/skins/awakeOmokSkin1.png',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      }
    ],
    notPurchasedItems: [
      {
        id: '3',
        type: 'MORNING',
        category: 'SKIN',
        name: '똑똑이 오목눈이',
        image: 'public/assets/skins/awakeOmokSkin2.png',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '4',
        type: 'MORNING',
        category: 'SKIN',
        name: '산타 오목눈이',
        image: 'public/assets/skins/awakeOmokSkin3.png',
        level: 0,
        bugPrice: 50,
        goldenBugPrice: 30
      }
    ]
  },
  NIGHT: {
    defaultItemId: '5',
    purchasedItems: [
      {
        id: '5',
        type: 'NIGHT',
        category: 'SKIN',
        name: '부엉이',
        image: 'public/assets/skins/awakeOwlSkin0.png',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '6',
        type: 'NIGHT',
        category: 'SKIN',
        name: '목도리 부엉이',
        image: 'public/assets/skins/awakeOwlSkin1.png',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      }
    ],
    notPurchasedItems: [
      {
        id: '7',
        type: 'NIGHT',
        category: 'SKIN',
        name: '똑똑이 부엉이',
        image: 'public/assets/skins/awakeOwlSkin2.png',
        level: 100,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '8',
        type: 'NIGHT',
        category: 'SKIN',
        name: '산타 부엉이',
        image: 'public/assets/skins/awakeOwlSkin3.png',
        level: 0,
        bugPrice: 1000,
        goldenBugPrice: 700
      }
    ]
  }
};

export const bugsData = {
  morningBug: 4,
  nightBug: 3,
  goldenBug: 100
};

export const userData = {
  nickname: '자려고 사는 사람',
  intro: '너무나 졸린사람',
  level: 3,
  exp: 6,
  birds: {
    MORNING_SKIN: 'cloudfront-url',
    NIGHT_SKIN: 'cloudfront-url'
  },
  badges: {
    오목눈이_탄생: true,
    어른_오목눈이: false,
    어른_부엉이: false,
    부엉이_탄생: true
  },
  participants_count: 3,
  coupons_count: 5
};
