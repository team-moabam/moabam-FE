import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';

const reportsHandlers = [
  http.post(baseURL('/reports'), async () => {
    await delay(1000);

    const status: number = 200;
    let response = {};

    switch (status) {
      case 200:
        response = { message: '모킹 룸 수정 완료' };
        break;
      case 400:
        response = {
          message: '필요한 값이 없습니다.',
          validation: {}
        };
        break;
      case 404:
        response = { message: '존재하지 않는 유저입니다.' };
        break;
    }

    return HttpResponse.json(response, { status });
  })
];

export default reportsHandlers;
