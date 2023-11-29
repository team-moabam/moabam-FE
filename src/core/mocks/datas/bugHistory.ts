import { BugHistory } from '@/core/types';

export const BUG_HISTORY: BugHistory = {
  history: [
    {
      id: 3,
      bugType: 'MORNING',
      actionType: '보상',
      amount: 2,
      date: '2023.11.01 23:50'
    },
    {
      id: 2,
      bugType: 'NIGHT',
      actionType: '쿠폰',
      amount: 5,
      date: '2023.10.25 23:50'
    },
    {
      id: 1,
      bugType: 'GOLDEN',
      actionType: '충전',
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
