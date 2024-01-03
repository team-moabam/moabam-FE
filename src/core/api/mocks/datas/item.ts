import { Items } from '@/core/types';

export const MORNING_ITEM: Items = {
  defaultItemId: 1,
  purchasedItems: [
    {
      id: 1,
      type: 'MORNING',
      category: 'SKIN',
      name: '오목눈이',
      image: 'public/assets/skins/awakeOmokSkin0.png',
      level: 1,
      bugPrice: 0,
      goldenBugPrice: 0
    },
    {
      id: 2,
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
      id: 3,
      type: 'MORNING',
      category: 'SKIN',
      name: '똑똑이 오목눈이',
      image: 'public/assets/skins/awakeOmokSkin2.png',
      level: 1,
      bugPrice: 2,
      goldenBugPrice: 3
    },
    {
      id: 4,
      type: 'MORNING',
      category: 'SKIN',
      name: '산타 오목눈이',
      image: 'public/assets/skins/awakeOmokSkin3.png',
      level: 0,
      bugPrice: 50,
      goldenBugPrice: 30
    },
    {
      id: 7,
      type: 'MORNING',
      category: 'SKIN',
      name: '골드 오목눈이',
      image: 'public/assets/skins/awakeOmokSkin3.png',
      level: 0,
      bugPrice: 5550,
      goldenBugPrice: 1
    },
    {
      id: 2423,
      type: 'MORNING',
      category: 'SKIN',
      name: '모닝 오목눈이',
      image: 'public/assets/skins/awakeOmokSkin3.png',
      level: 0,
      bugPrice: 1,
      goldenBugPrice: 5550
    }
  ]
};

export const NIGHT_ITEM: Items = {
  defaultItemId: 5,
  purchasedItems: [
    {
      id: 5,
      type: 'NIGHT',
      category: 'SKIN',
      name: '부엉이',
      image: 'public/assets/skins/awakeOwlSkin0.png',
      level: 1,
      bugPrice: 0,
      goldenBugPrice: 0
    },
    {
      id: 6,
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
      id: 7,
      type: 'NIGHT',
      category: 'SKIN',
      name: '똑똑이 부엉이',
      image: 'public/assets/skins/awakeOwlSkin2.png',
      level: 100,
      bugPrice: 0,
      goldenBugPrice: 0
    },
    {
      id: 8,
      type: 'NIGHT',
      category: 'SKIN',
      name: '산타 부엉이',
      image: 'public/assets/skins/awakeOwlSkin3.png',
      level: 0,
      bugPrice: 1000,
      goldenBugPrice: 700
    }
  ]
};
