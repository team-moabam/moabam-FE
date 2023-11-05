export interface BirdItemType {
  id: string;
  type: string;
  category: string;
  name: string;
  image: string;
  level: number;
  bugPrice: number;
  goldenBugPrice: number;
}

interface BirdItemsType {
  MORNING: {
    purchasedItems: BirdItemType[];
    notPurchasedItems: BirdItemType[];
  };
  NIGHT: {
    purchasedItems: BirdItemType[];
    notPurchasedItems: BirdItemType[];
  };
}

export const birdItems: BirdItemsType = {
  MORNING: {
    purchasedItems: [
      {
        id: '1',
        type: 'MORNING',
        category: 'SKIN',
        name: '무슨 오목눈이',
        image:
          'https://pbs.twimg.com/profile_images/1568998644673843202/CZgQSNk8_400x400.jpg',
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
        name: '무슨 오목눈이',
        image:
          'https://pbs.twimg.com/profile_images/1568998644673843202/CZgQSNk8_400x400.jpg',
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
        name: '마법사 부엉이',
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
        name: '도적 부엉이',
        image:
          'data:image/jpeg;base64,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',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      },
      {
        id: '15',
        type: 'NIGHT',
        category: 'SKIN',
        name: '전사 부엉이',
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
        name: '궁수 부엉이',
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
        name: '마법사 부엉이',
        image:
          'https://velog.velcdn.com/images%2Fwhdtlrtlr4%2Fpost%2F38023ee7-2d1b-4d89-b1ed-8198be095d9c%2Fsungmo%20(4).jpeg',
        level: 1,
        bugPrice: 0,
        goldenBugPrice: 0
      }
    ]
  }
};

export const bugArray: string[] = ['morningBug', 'nightBug', 'goldenBug'];

interface Wallet {
  [key: string]: number;
}

export const wallet: Wallet = {
  morningBug: 4,
  nightBug: 3,
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
