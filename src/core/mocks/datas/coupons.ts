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
    endAt: '2023-12-01T00:00',
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
    endAt: '2023-12-01T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 5,
    name: '돈이 체고야',
    point: 10,
    description: '행운의 주인공!',
    couponType: 'GOLDEN_COUPON',
    stock: 7,
    startAt: '2023-11-14T00:00',
    endAt: '2023-12-01T02:00',
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

export const ONGOING_COUPONS: Coupons = [
  {
    couponId: 1,
    name: '아침쿠폰',
    point: 10,
    description: '누가 나를 깨웠는가!',
    couponType: 'MORNING_COUPON',
    stock: 10,
    startAt: '2023-11-14T00:00',
    endAt: '2023-12-01T00:00',
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
    endAt: '2023-12-01T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 3,
    name: '돈이 체고야',
    point: 10,
    description: '행운의 주인공!',
    couponType: 'GOLDEN_COUPON',
    stock: 7,
    startAt: '2023-11-14T00:00',
    endAt: '2023-12-01T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 4,
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

export const NOTSTARTED_COUPON: Coupons = [
  {
    couponId: 5,
    name: '아침쿠폰',
    point: 10,
    description: '누가 나를 깨웠는가!',
    couponType: 'MORNING_COUPON',
    stock: 10,
    startAt: '2023-12-00T00:00',
    endAt: '2023-12-01T00:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 6,
    name: '밤쿠폰',
    point: 1,
    description: '누가 나를 재웠는가!',
    couponType: 'NIGHT_COUPON',
    stock: 77,
    startAt: '2023-12-02T00:00',
    endAt: '2023-12-10T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 7,
    name: '돈이 체고야',
    point: 10,
    description: '행운의 주인공!',
    couponType: 'GOLDEN_COUPON',
    stock: 7,
    startAt: '2023-12-10T00:00',
    endAt: '2023-12-20T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 8,
    name: '돈이 체고야',
    point: 1000,
    description: '행운의 주인공!',
    couponType: 'DISCOUNT_COUPON',
    stock: 7,
    startAt: '2023-12-14T00:00',
    endAt: '2023-12-23T00:00',
    couponAdminName: 'Parksey'
  }
];

export const ENDED_COUPON: Coupons = [
  {
    couponId: 9,
    name: '아침쿠폰',
    point: 10,
    description: '누가 나를 깨웠는가!',
    couponType: 'MORNING_COUPON',
    stock: 10,
    startAt: '2023-11-01T00:00',
    endAt: '2023-11-03T00:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 10,
    name: '밤쿠폰',
    point: 1,
    description: '누가 나를 재웠는가!',
    couponType: 'NIGHT_COUPON',
    stock: 77,
    startAt: '2023-11-02T00:00',
    endAt: '2023-11-10T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 11,
    name: '돈이 체고야',
    point: 10,
    description: '행운의 주인공!',
    couponType: 'GOLDEN_COUPON',
    stock: 7,
    startAt: '2023-11-10T00:00',
    endAt: '2023-11-20T02:00',
    couponAdminName: 'Parksey'
  },

  {
    couponId: 12,
    name: '돈이 체고야',
    point: 1000,
    description: '행운의 주인공!',
    couponType: 'DISCOUNT_COUPON',
    stock: 7,
    startAt: '2023-11-14T00:00',
    endAt: '2023-11-20T00:00',
    couponAdminName: 'Parksey'
  }
];
