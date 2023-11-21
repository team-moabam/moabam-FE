import { queryOptions } from '@tanstack/react-query';
import { CouponStatus } from '@/core/types';
import couponAPI from '../functions/couponAPI';

const couponOptions = {
  all: (body: CouponStatus) =>
    queryOptions({
      queryKey: ['coupons', body] as const,
      queryFn: () => couponAPI.postCouponsByStatus(body)
    }),
  onGoing: () =>
    queryOptions({
      queryKey: ['coupons', 'onGoing'] as const,
      queryFn: () =>
        couponAPI.postCouponsByStatus({
          couponOngoing: true,
          couponEnded: false,
          couponNotStarted: false
        })
    }),
  ended: () =>
    queryOptions({
      queryKey: ['coupons', 'ended'] as const,
      queryFn: () =>
        couponAPI.postCouponsByStatus({
          couponOngoing: false,
          couponEnded: true,
          couponNotStarted: false
        })
    }),
  notStarted: () =>
    queryOptions({
      queryKey: ['coupons', 'notStarted'] as const,
      queryFn: () =>
        couponAPI.postCouponsByStatus({
          couponOngoing: false,
          couponEnded: false,
          couponNotStarted: true
        })
    })
};

export default couponOptions;
