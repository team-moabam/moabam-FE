import { queryOptions } from '@tanstack/react-query';
import couponAPI from '../functions/couponAPI';

const couponOptions = {
  available: () =>
    queryOptions({
      queryKey: ['coupons', 'available'] as const,
      queryFn: () =>
        couponAPI.postCouponsByStatus({
          opened: false,
          ended: false
        })
    }),

  opened: () =>
    queryOptions({
      queryKey: ['coupons', 'available', 'opened'] as const,
      queryFn: () =>
        couponAPI.postCouponsByStatus({
          opened: true,
          ended: true
        })
    }),

  closed: () =>
    queryOptions({
      queryKey: ['coupons', 'closed'] as const,
      queryFn: () =>
        couponAPI.postCouponsByStatus({
          opened: false,
          ended: true
        })
    })
};

export default couponOptions;
