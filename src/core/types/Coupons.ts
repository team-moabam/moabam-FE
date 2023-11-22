export type CouponType =
  | 'MORNING_COUPON'
  | 'NIGHT_COUPON'
  | 'GOLDEN_COUPON'
  | 'DISCOUNT_COUPON';

export interface Coupon {
  couponId: number;
  name: string;
  point: number;
  description: string;
  couponType: CouponType;
  stock: number;
  startAt: string;
  endAt: string;
  couponAdminName: string;
}

export type Coupons = Coupon[];

export interface CouponStatus {
  couponOngoing: boolean;
  couponNotStarted: boolean;
  couponEnded: boolean;
}

export interface MyCoupon {
  couponId: string;
  name: string;
  point: number;
  description: string;
  type: 'MORNING_COUPON' | 'NIGHT_COUPON' | 'GOLDEN_COUPON';
}

export interface MyCouponsType {
  myCouponsResponse: MyCoupon[];
}
