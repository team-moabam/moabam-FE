import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { RoomInfo } from '../datas/room';

const roomsHandlers = [
  http.post(baseURL('/rooms'), async () => {
    await delay(1000);

    const status: number = 201;
    let response = {};

    switch (status) {
      case 201:
        response = { message: '모킹 룸 생성 완료', roomId: 1 };
        break;
      case 400:
        response = {
          message: '유효하지 않은 요청입니다.',
          validation: {
            title: 'Title Error',
            password: 'Password Error',
            type: 'Type Error',
            routine: 'Routine Error',
            certifyTime: 'CertifyTime Error',
            maxUserCount: 'MaxUserCount Error'
          }
        };
        break;
      case 401:
        response = { message: '로그인이 필요합니다.' };
        break;
    }

    return HttpResponse.json(response, { status });
  }),
  http.get(baseURL('/rooms/:roomId'), async () => {
    await delay(200);
    const response = RoomInfo;
    return HttpResponse.json(response);
  })
];

export default roomsHandlers;
