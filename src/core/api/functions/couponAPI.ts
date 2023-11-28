import { Coupons } from '@/core/types';
import { CouponStatus } from '@/core/types';
import { MyCoupon } from '@/core/types';
import { baseInstance } from '../instance';

const couponAPI = {
  postCouponsByStatus: async (body: CouponStatus) => {
    return await baseInstance.post<Coupons>('/coupons/search', body);
  },
  postCouponReceive: async (params: { couponName: string }) => {
    return await baseInstance.post('/coupons', null, { params });
  },
  myCoupon: async () => {
    return await baseInstance.get<MyCoupon[]>(`/my-coupons`);
  },
  useCoupon: async (couponWalletId: number) => {
    return await baseInstance.post(`/my-coupons/${couponWalletId}`);
  }
};

export default couponAPI;
