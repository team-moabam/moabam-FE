import { Coupons } from '@/core/types';

export const COUPONS: Coupons = [
  {
    couponId: 1,
    name: '아침쿠폰',
    point: 10,
    description: '누가 나를 깨웠는가!',
    couponType: 'MORNING',
    stock: 10,
    openAt: '2023-11-14T00:00',
    startAt: '2023-11-15T00:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 2,
    name: '밤쿠폰',
    point: 1,
    description: '누가 나를 재웠는가!',
    couponType: 'NIGHT',
    stock: 77,
    openAt: '2023-11-15T00:00',
    startAt: '2023-12-01T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 3,
    name: '돈이 체고야',
    point: 10,
    description: '행운의 주인공!',
    couponType: 'GOLDEN',
    stock: 7,
    openAt: '2023-11-14T00:00',
    startAt: '2023-12-01T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 4,
    name: '돈이 체고야',
    point: 1000,
    description: '행운의 주인공!',
    couponType: 'DISCOUNT',
    stock: 7,
    openAt: '2023-11-15T00:20',
    startAt: '2023-12-03T00:00',
    couponAdminName: 'Parksey'
  }
];
