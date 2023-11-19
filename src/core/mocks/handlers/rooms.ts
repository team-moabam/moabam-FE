import { http, HttpResponse, delay } from 'msw';
import { Room } from '@/RoomList/mocks/types/rooms';
import { baseURL } from '../baseURL';
import { RoomInfo } from '../datas/room';
import { MY_JOIN_ROOMS } from '../datas/myJoinRoom';
import { ROOMS } from '../datas/totalRooms';

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
    const lastId = Number(url.searchParams.get('roomId'));

    const morningRooms = ROOMS.filter(({ roomType }) => roomType === 'MORNING');
    const nightRooms = ROOMS.filter(({ roomType }) => roomType === 'NIGHT');

    const cutNextPage = (rooms: Room[]) => {
      const lastIndex = rooms.findIndex(({ id }) => id === lastId);
      return rooms.slice(lastIndex + 1, lastIndex + 11);
    };

    let responseRooms = [];
    switch (type) {
      case 'morning':
        responseRooms = cutNextPage(morningRooms);
        break;
      case 'night':
        responseRooms = cutNextPage(nightRooms);
        break;
      default:
        responseRooms = cutNextPage(ROOMS);
    }

    return HttpResponse.json(
      {
        rooms: responseRooms,
        hasNext: responseRooms.length === 10
      },
      { status: 200 }
    );
  })
];

export default roomsHandlers;
