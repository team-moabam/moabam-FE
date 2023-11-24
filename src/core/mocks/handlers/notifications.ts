import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';

const notificationsHandlers = [
  http.post(baseURL('/notifications'), async () => {
    return HttpResponse.json(null, { status: 200 });
  }),
  http.get(baseURL('/notifications/:roomId/:memberId'), async () => {
    await delay(1000);

    const status: number = 200;
    let response = {};

    switch (status) {
      case 200:
        response = {};
        break;
      case 400:
        response = {
          message: '콕 찌르기는 각 유저마다 인증타임 당 1회 가능합니다.'
        };
        break;
      case 401:
        response = { message: '로그인 후 이용 가능합니다.' };
        break;
      case 404:
        response = {
          message: '존재하지 않는 유저입니다.'
        };
    }

    return HttpResponse.json({ body: response, status });
  })
];

export default notificationsHandlers;
