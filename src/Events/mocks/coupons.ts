import { Coupons } from './types/couponType';

export const coupons: Coupons = [
  {
    couponId: 1,
    name: '아침쿠폰',
    point: 10,
    description: '누가 나를 깨웠는가!',
    couponType: 'MORNING_COUPON',
    stock: 10,
    startAt: 'yyyy-mm-ddThh:mm',
    endAt: 'yyyy-mm-ddThh:mm',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 2,
    name: '밤쿠폰',
    point: 1,
    description: '누가 나를 재웠는가!',
    couponType: 'NIGHT_COUPON',
    stock: 77,
    startAt: 'yyyy-mm-ddThh:mm',
    endAt: 'yyyy-mm-ddThh:mm',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 5,
    name: '돈이 체고야',
    point: 1777,
    description: '행운의 주인공!',
    couponType: 'GOLDEN_COUPON',
    stock: 7,
    startAt: 'yyyy-mm-ddThh:mm',
    endAt: 'yyyy-mm-ddThh:mm',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 77,
    name: '돈이 체고야',
    point: 1000,
    description: '행운의 주인공!',
    couponType: 'DISCOUNT_COUPON',
    stock: 7,
    startAt: 'yyyy-mm-ddThh:mm',
    endAt: 'yyyy-mm-ddThh:mm',
    couponAdminName: 'Parksey'
  }
];
