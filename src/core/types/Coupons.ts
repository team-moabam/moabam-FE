export type CouponType = 'MORNING' | 'NIGHT' | 'GOLDEN' | 'DISCOUNT';

export interface Coupon {
  couponId: number;
  name: string;
  point: number;
  description: string;
  couponType: CouponType;
  stock: number;
  startAt: string;
  openAt: string;
  couponAdminName: string;
}

export type Coupons = Coupon[];

export interface CouponStatus {
  opened: boolean;
  ended: boolean;
}
