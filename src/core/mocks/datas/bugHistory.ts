import { BugHistory } from '@/core/types';

export const BUG_HISTORY: BugHistory = {
  history: [
    {
      id: 31222,
      bugType: 'MORNING',
      actionType: 'REWARD',
      quantity: 2,
      date: '2023.11.01 23:50'
    },
    {
      id: 2334,
      bugType: 'NIGHT',
      actionType: 'COUPON',
      quantity: 5,
      date: '2023.10.25 23:50'
    },
    {
      id: 6,
      bugType: 'GOLDEN',
      actionType: 'CHARGE',
      quantity: 10,
      date: '2023.10.19 23:50',
      paymentInfo: {
        id: 1231,
        orderName: '황금벌레 10',
        discountAmount: 1000,
        totalAmount: 2000
      }
    },
    {
      id: 16464,
      bugType: 'GOLDEN',
      actionType: 'USE',
      quantity: 10,
      date: '2023.10.19 23:50'
    }
  ]
};
