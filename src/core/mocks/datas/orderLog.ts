interface History {
  id: number;
  bugType: 'MORNING_BUG' | 'NIGHT_BUG' | 'GOLDEN_BUG';
  action: '보상' | '쿠폰' | '충전';
  amount: number;
  date: string;
  paymentInfo?: {
    id: number;
    count: number;
    price: number;
    discount: number;
    provider: string;
  };
}

export const orderLog: { history: History[] } = {
  history: [
    {
      id: 3,
      bugType: 'MORNING_BUG',
      action: '보상',
      amount: 2,
      date: '2023.11.01 23:50'
    },
    {
      id: 2,
      bugType: 'NIGHT_BUG',
      action: '쿠폰',
      amount: 5,
      date: '2023.10.25 23:50'
    },
    {
      id: 1,
      bugType: 'GOLDEN_BUG',
      action: '충전',
      amount: 10,
      date: '2023.10.19 23:50',
      paymentInfo: {
        id: 1,
        count: 10,
        price: 3000,
        discount: 1000,
        provider: '...'
      }
    }
  ]
};

interface Bug {
  color: 'text-light-point' | 'text-dark-point' | 'text-warning';
  name: string;
}

export interface Bugs {
  MORNING_BUG: Bug;
  NIGHT_BUG: Bug;
  GOLDEN_BUG: Bug;
}

export const bugs: Bugs = {
  MORNING_BUG: {
    color: 'text-light-point',
    name: '낮벌레'
  },
  NIGHT_BUG: {
    color: 'text-dark-point',
    name: '밤벌레'
  },
  GOLDEN_BUG: {
    color: 'text-warning',
    name: '황금벌레'
  }
};
