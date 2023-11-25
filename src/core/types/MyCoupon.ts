export interface MyCoupons {
  myCouponsResponse: {
    couponId: number;
    name: string;
    point: number;
    description: string;
    type: 'MORNING_COUPON' | 'NIGHT_COUPON' | 'GOLDEN_COUPON';
  }[];
}
