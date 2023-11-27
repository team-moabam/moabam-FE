import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';

const paymentHandler = [
  http.post(baseURL('/payments/:paymentId'), async () => {
    delay(1000);
    return HttpResponse.json({}, { status: 200 });
  }),
  http.post(baseURL('/payments/confirm'), async () => {
    delay(1000);
    return HttpResponse.json({}, { status: 200 });
  })
];

export default paymentHandler;
