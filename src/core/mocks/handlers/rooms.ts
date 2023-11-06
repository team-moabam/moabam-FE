import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';

const roomsHandlers = [
  http.post(baseURL('/rooms'), async () => {
    await delay(1000);
    return HttpResponse.json(
      { message: '모킹 룸 생성 완료' },
      {
        status: 200
      }
    );
  })
];

export default roomsHandlers;
