export type CouponType = 'MORNING' | 'NIGHT' | 'GOLDEN' | 'DISCOUNT';

export interface Coupon {
  id: number;
  name: string;
  point: number;
  description: string;
  type: CouponType;
  stock: number;
  startAt: string;
  openAt: string;
  adminName: string;
}

export type Coupons = Coupon[];

export interface CouponStatus {
  opened: boolean;
  ended: boolean;
}
