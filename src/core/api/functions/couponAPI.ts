import { Coupons } from '@/core/types';
import { CouponStatus } from '@/core/types';
import { baseInstance } from '../instance';
import { MyCouponsType } from '@/core/types/Coupons';

const couponAPI = {
  postCouponsByStatus: async (body: CouponStatus) => {
    return await baseInstance.post<Coupons>('/coupons/search', body);
  },
  myCoupon: async () => {
    return await baseInstance.get<MyCouponsType>(`/my-coupons`);
  },
  postCouponReceive: async (params: { couponName: string }) => {
    return await baseInstance.post('/coupons', null, { params });
  }
};

export default couponAPI;
