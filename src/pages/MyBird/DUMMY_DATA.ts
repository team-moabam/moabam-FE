import { BirdItemsType, Wallet } from './type';

export const birdItems: BirdItemsType = {
  MORNING: {
    purchasedItems: [
      {
        id: '1',
        type: 'MORNING',
        category: 'SKIN',
        name: '짱구 오목눈이',
        image:
          'https://image.musinsa.com/mfile_s01/2020/03/24/6027305d9804e068192879822fe1fbbb145252.jpg',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '2',
        type: 'MORNING',
        category: 'SKIN',
        name: '짱구2 오목눈이',
        image:
          'https://img.tvreportcdn.de/cms-content/uploads/2023/08/07/8a701e5e-79f0-422d-b19f-b3411fe3eb43.jpg',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      }
    ],
    notPurchasedItems: [
      {
        id: '156',
        type: 'MORNING',
        category: 'SKIN',
        name: '해린 오목눈이',
        image: 'https://image.blip.kr/v1/file/5ca15168224e5052f9e4cd601387976c',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      }
    ]
  },
  NIGHT: {
    purchasedItems: [
      {
        id: '12',
        type: 'NIGHT',
        category: 'SKIN',
        name: '따봉 부엉이',
        image:
          'https://pbs.twimg.com/profile_images/1568998644673843202/CZgQSNk8_400x400.jpg',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '14',
        type: 'NIGHT',
        category: 'SKIN',
        name: '고이즈미 부엉이',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4wrjzJDzJgtEqo_D8607rh5Majj6CDTSQA&usqp=CAU',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '15',
        type: 'NIGHT',
        category: 'SKIN',
        name: '백곰 부엉이',
        image:
          'https://blog.kakaocdn.net/dn/3ghE9/btq2RjJq0zF/skhqeIUWQca9a8VDiPW1Sk/img.png',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '134',
        type: 'NIGHT',
        category: 'SKIN',
        name: '구혜선 부엉이',
        image:
          'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/03/08/f6f454b9-152e-406b-b20a-4d9b7e8e1dd9.jpg',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      }
    ],
    notPurchasedItems: [
      {
        id: '34534451',
        type: 'NIGHT',
        category: 'SKIN',
        name: '성모 부엉이',
        image:
          'https://velog.velcdn.com/images%2Fwhdtlrtlr4%2Fpost%2F38023ee7-2d1b-4d89-b1ed-8198be095d9c%2Fsungmo%20(4).jpeg',
        level: 1,
        bugPrice: 50,
        goldenBugPrice: 20
      },
      {
        id: '3244',
        type: 'NIGHT',
        category: 'SKIN',
        name: '뭐지이건 부엉이',
        image:
          'https://img1.daumcdn.net/thumb/R1280x0/?fname=https://t1.daumcdn.net/brunch/service/user/5DNO/image/oJvKglQmemO8DHmYBZxrgBbYODs.jpg',
        level: 5,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '324532524',
        type: 'NIGHT',
        category: 'SKIN',
        name: '못사는 부엉이',
        image: '',
        level: 0,
        bugPrice: 1110,
        goldenBugPrice: 3330
      }
    ]
  }
};

export const bugArray: ('morningBug' | 'nightBug' | 'goldenBug')[] = [
  'morningBug',
  'nightBug',
  'goldenBug'
];

export const wallet: Wallet = {
  morningBug: 4,
  nightBug: 300,
  goldenBug: 100
};

interface BugColor {
  [key: string]: string;
}

export const bugColor: BugColor = {
  morningBug: 'text-light-point',
  nightBug: 'text-dark-point',
  goldenBug: 'text-warning'
};
