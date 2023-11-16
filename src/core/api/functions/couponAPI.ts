import { Coupons } from '@/core/types';
import { CouponStatus } from '@/core/types';
import { baseInstance } from '../instance';

const couponAPI = {
  postCouponsByStatus: async (body: CouponStatus) => {
    return await baseInstance.post<Coupons>('/coupons/search', body);
  }
};

export default couponAPI;
