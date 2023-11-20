import { Coupons } from '@/core/types';
import { CouponStatus } from '@/core/types';
import { baseInstance } from '../instance';

const couponAPI = {
  postCouponsByStatus: async (body: CouponStatus) => {
    return await baseInstance.post<Coupons>('/coupons/search', body);
  },
  myCoupon: async () => {
    return await baseInstance.get(`/my-coupons`);
  }
};

export default couponAPI;
