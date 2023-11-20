import { queryOptions } from '@tanstack/react-query';
import { CouponStatus } from '@/core/types';
import couponAPI from '../functions/couponAPI';

const couponOptions = {
  all: (body: CouponStatus) =>
    queryOptions({
      queryKey: ['coupons', body] as const,
      queryFn: () => couponAPI.postCouponsByStatus(body)
    }),
  my: () =>
    queryOptions({
      queryKey: ['coupons', 'my'] as const,
      queryFn: () => couponAPI.myCoupon()
    })
};

export default couponOptions;
