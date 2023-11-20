import { Coupons } from '@/core/types';

export const COUPONS: Coupons = [
  {
    couponId: 1,
    name: '아침쿠폰',
    point: 10,
    description: '누가 나를 깨웠는가!',
    couponType: 'MORNING_COUPON',
    stock: 10,
    startAt: '2023-11-14T00:00',
    endAt: '2023-12-00T00:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 2,
    name: '밤쿠폰',
    point: 1,
    description: '누가 나를 재웠는가!',
    couponType: 'NIGHT_COUPON',
    stock: 77,
    startAt: '2023-11-15T00:00',
    endAt: '2023-12-00T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 5,
    name: '돈이 체고야',
    point: 1777,
    description: '행운의 주인공!',
    couponType: 'GOLDEN_COUPON',
    stock: 7,
    startAt: '2023-11-14T00:00',
    endAt: '2023-12-00T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 77,
    name: '돈이 체고야',
    point: 1000,
    description: '행운의 주인공!',
    couponType: 'DISCOUNT_COUPON',
    stock: 7,
    startAt: '2023-11-15T00:20',
    endAt: '2023-12-03T00:00',
    couponAdminName: 'Parksey'
  }
];
