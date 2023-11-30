import { CouponType } from './Coupons';

export interface MyCoupon {
  id: number;
  name: string;
  point: number;
  description: string;
  type: CouponType;
}
