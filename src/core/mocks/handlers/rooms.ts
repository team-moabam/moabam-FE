import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { RoomInfo } from '../datas/room';
import { MY_JOIN_ROOMS } from '../datas/myJoinRoom';
import { TOTAL_ROOMS } from '../datas/totalRooms';

const roomsHandlers = [
  http.post(baseURL('/rooms'), async () => {
    await delay(1000);

    const status: number = 201;
    let response = {};

    switch (status) {
      case 201:
        response = { roomId: 1 };
        break;
      case 400:
        response = {
          message: '유효하지 않은 요청입니다.',
          validation: {
            title: 'Title Error',
            password: 'Password Error',
            roomType: 'RoomType Error',
            routines: 'Routines Error',
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

  http.get(baseURL('/rooms/my-join'), async () => {
    await delay(1000);
    return HttpResponse.json(MY_JOIN_ROOMS, { status: 200 });
  }),

  http.get(baseURL('/rooms/:roomId'), async () => {
    await delay(1000);

    const status: number = 200;
    let response = {};

    switch (status) {
      case 200:
        response = RoomInfo;
        break;
      case 401:
        response = { message: '존재하지 않는 유저입니다.' };
        break;
      case 404:
        response = { message: '존재하지 않는 방입니다.' };
        break;
    }

    return HttpResponse.json(response, { status });
  }),

  http.put(baseURL('/rooms/:roomId'), async () => {
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
          validation: {
            title: 'Title Error',
            announcement: 'Announcement Error',
            routine: 'Routine Error',
            password: 'Password Error',
            certifyTime: 'CertifyTime Error',
            maxUserCount: 'MaxUserCount Error'
          }
        };
        break;
      case 401:
        response = { message: '페이지를 찾을 수 없습니다.' };
        break;
      case 404:
        response = { message: '존재하지 않는 방입니다.' };
        break;
    }

    return HttpResponse.json(response, { status });
  }),

  http.delete(baseURL('/rooms/:roomId'), async () => {
    await delay(1000);

    const status: number = 200;
    let response = {};

    switch (status) {
      case 200:
        response = {};
        break;
      case 400:
        response = {
          message: '방장은 나가려면 위임 하거나 혼자 남아있어야 합니다.'
        };
        break;
      case 401:
        response = { message: '존재하지 않는 유저입니다.' };
        break;
    }

    return HttpResponse.json(response, { status });
  }),

  http.delete(baseURL('/rooms/:roomId/members/:memberId'), async () => {
    await delay(1000);

    const status: number = 200;
    let response = {};

    switch (status) {
      case 200:
        response = {};
        break;
      case 400:
        response = { message: '방장만 추방할 수 있습니다.' };
        break;
      case 401:
        response = { message: '존재하지 않는 유저입니다.' };
        break;
    }

    return HttpResponse.json(response, { status });
  }),

  http.put(baseURL('/rooms/:roomId/members/:memberId/delegation'), async () => {
    await delay(1000);

    const status: number = 200;
    let response = {};

    switch (status) {
      case 200:
        response = {};
        break;
      case 400:
        response = { message: '방장만 위임할 수 있습니다.' };
        break;
      case 401:
        response = { message: '존재하지 않는 유저입니다.' };
        break;
    }

    return HttpResponse.json(response, { status });
  }),

  http.get(baseURL('/rooms'), async ({ request }) => {
    await delay(2000);
    const url = new URL(request.url);
    const type = url.searchParams.get('type');
    const page = Number(url.searchParams.get('page')) || 1;
    const size = Number(url.searchParams.get('size')) || 10;

    const totalRooms = TOTAL_ROOMS.rooms;
    const morningRooms = totalRooms.filter(
      ({ roomType }) => roomType === 'MORNING'
    );
    const nightRooms = totalRooms.filter(
      ({ roomType }) => roomType === 'NIGHT'
    );

    let rooms = [];
    switch (type) {
      case 'morning':
        rooms = morningRooms.slice(size * (page - 1), size * page);
        break;
      case 'night':
        rooms = nightRooms.slice(size * (page - 1), size * page);
        break;
      default:
        rooms = totalRooms.slice(size * (page - 1), size * page);
    }

    return HttpResponse.json({ rooms }, { status: 200 });
  })
];

export default roomsHandlers;
