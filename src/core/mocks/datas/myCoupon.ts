import { MyCoupon } from '@/core/types';

export const MY_COUPONS: MyCoupon[] = [
  {
    couponId: 1,
    name: '아침쿠폰',
    point: 10,
    description: '누가 나를 깨웠는가!',
    type: 'MORNING_COUPON'
  },
  {
    couponId: 2,
    name: '밤쿠폰',
    point: 1,
    description: '누가 나를 재웠는가!',
    type: 'NIGHT_COUPON'
  },
  {
    couponId: 5,
    name: '돈이 체고야',
    point: 1777,
    description: '행운의 주인공!',
    type: 'GOLDEN_COUPON'
  },
  {
    couponId: 26,
    name: '결제할인',
    point: 99,
    description: '엉엉',
    type: 'DISCOUNT_COUPON'
  }
];
