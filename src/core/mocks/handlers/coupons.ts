import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { COUPONS } from '../datas/coupons';
import { MY_COUPON } from '../datas/myCoupon';

const couponsHandlers = [
  http.post(baseURL('/coupons/search'), async () => {
    await delay(1000);
    return HttpResponse.json(COUPONS, { status: 200 });
  }),
  http.get(baseURL('/my-coupons'), async () => {
    await delay(1000);
    return HttpResponse.json(MY_COUPON, { status: 200 });
  })
];

export default couponsHandlers;
