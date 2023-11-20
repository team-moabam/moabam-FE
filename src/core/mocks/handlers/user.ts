import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';

const userHandlers = [
  http.post(baseURL('/coupons/search'), async () => {
    await delay(1000);
    return HttpResponse.json({}, { status: 200 });
  })
];

export default userHandlers;
