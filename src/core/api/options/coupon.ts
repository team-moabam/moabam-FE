import { queryOptions } from '@tanstack/react-query';
import { CouponStatus } from '@/core/types';
import couponAPI from '../functions/couponAPI';

const couponOptions = {
  filter: (dueType: 'available' | 'opened' | 'ended') => {
    const body: CouponStatus = {
      opened: dueType !== 'available' && dueType === 'opened',
      ended: dueType !== 'available' && dueType === 'ended'
    };
    return queryOptions({
      queryKey: ['coupons', dueType] as const,
      queryFn: () => couponAPI.postCouponsByStatus(body)
    });
  }
};

export default couponOptions;
