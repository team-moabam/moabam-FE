import { CouponType } from './Coupons';

export interface MyCoupon {
  walletId: number;
  id: number;
  name: string;
  point: number;
  description: string;
  type: CouponType;
}
