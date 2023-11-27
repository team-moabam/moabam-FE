import { Coupons } from '@/core/types';
import { CouponStatus } from '@/core/types';
import { MyCoupons } from '@/core/types';
import { baseInstance } from '../instance';

const couponAPI = {
  postCouponsByStatus: async (body: CouponStatus) => {
    return await baseInstance.post<Coupons>('/coupons/search', body);
  },
  postCouponReceive: async (params: { couponName: string }) => {
    return await baseInstance.post('/coupons', null, { params });
  },
  myCoupon: async () => {
    return await baseInstance.get<MyCoupons>(`/my-coupons`);
  }
};

export default couponAPI;
