import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { COUPONS } from '../datas/coupons';
import { MY_COUPON } from '../datas/myCoupon';

const couponsHandlers = [
  http.post(baseURL('/coupons/search'), async () => {
    await delay(1500);
    return HttpResponse.json(
      [
        {
          couponId: 15,
          name: '새 멤버 환영',
          point: 10,
          description: '오늘의 루틴도 화이팅!',
          couponType: 'MORNING_COUPON',
          stock: 20,
          openAt: new Date().toJSON(),
          startAt: new Date().toJSON(),
          couponAdminName: 'Moabam'
        },
        ...COUPONS
      ],
      { status: 200 }
    );
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

    return HttpResponse.json({ response }, { status });
  }),

  http.get(baseURL('/my-coupons'), async () => {
    await delay(1000);
    return HttpResponse.json(MY_COUPON, { status: 200 });
  }),
  http.post(baseURL('/my-coupons/:couponWalletId'), async () => {
    console.log(1);
    await delay(1000);
    return HttpResponse.json({}, { status: 200 });
  })
];

export default couponsHandlers;
