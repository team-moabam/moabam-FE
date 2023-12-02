import { Coupons } from '@/core/types';

export const COUPONS: Coupons = [
  {
    id: 11,
    name: '아침쿠폰',
    point: 10,
    description: '누가 나를 깨웠는가!',
    type: 'MORNING',
    maxCount: 10,
    openAt: '2023-11-14T00:00',
    startAt: '2023-11-10T00:00',
    adminName: 'Parksey'
  },

  {
    id: 12,
    name: '밤쿠폰',
    point: 1,
    description: '누가 나를 재웠는가!',
    type: 'NIGHT',
    maxCount: 77,
    openAt: '2023-11-15T00:00',
    startAt: '2023-12-10T02:00',
    adminName: 'Parksey'
  },

  {
    id: 13,
    name: '돈이 체고야',
    point: 10,
    description: '행운의 주인공!',
    type: 'GOLDEN',
    maxCount: 7,
    openAt: '2023-11-14T00:00',
    startAt: '2023-12-10T02:00',
    adminName: 'Parksey'
  },

  {
    id: 14,
    name: '돈이 체고야',
    point: 1000,
    description: '행운의 주인공!',
    type: 'DISCOUNT',
    maxCount: 7,
    openAt: '2023-11-15T00:20',
    startAt: '2023-12-10T00:00',
    adminName: 'Parksey'
  }
];
