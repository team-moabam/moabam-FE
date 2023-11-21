import { http, HttpResponse, delay } from 'msw';
import { CouponStatus } from '@/core/types';
import { baseURL } from '../baseURL';
import { COUPONS, ONGOING_COUPONS } from '../datas/coupons';

const couponsHandlers = [
  http.post(baseURL('/coupons/search'), async () => {
    await delay(1000);
    return HttpResponse.json(ONGOING_COUPONS, { status: 200 });
  })
];

export default couponsHandlers;
