import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { ONGOING_COUPONS } from '../datas/coupons';

const couponsHandlers = [
  http.post(baseURL('/coupons/search'), async () => {
    await delay(1000);
    return HttpResponse.json(ONGOING_COUPONS, { status: 200 });
  }),

  http.post(baseURL('/coupons'), async () => {
    await delay(2000);

    const status: number = 200;
    let response = {};

    switch (status) {
      case 400:
        response = {
          message: '쿠폰 발급 가능한 선착순 내에 들어오지 못했습니다.'
        };
        break;
      case 401:
        response = { message: '로그인 후 이용 가능합니다.' };
        break;
      case 409:
        response = { message: '이미 발급 받은 쿠폰입니다.' };
        break;
    }

    return HttpResponse.json(response, { status });
  })
];

export default couponsHandlers;
