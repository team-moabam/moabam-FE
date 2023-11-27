import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { MEMBER_INFO, MY_INFO } from '../datas/member';

const membersHandlers = [
  http.get(baseURL('/members'), async () => {
    await delay(1000);
    const status: number = 200;
    let response = {};

    switch (status) {
      case 200:
        return HttpResponse.json(MY_INFO, { status: 200 });
      case 401:
        response = { message: '로그인이 필요해요.' };
        break;
    }

    return HttpResponse.json(response, { status });
  }),
  http.post(baseURL('/members/login/kakao/oauth'), async () => {
    await delay(1000);

    const status: number = 200;
    let response = {};
    const headers = new Headers();

    switch (status) {
      case 200:
        response = { signUp: false, id: 5 };
        headers.set('Set-Cookie', 'accessToken=MockedToken;');
        headers.append('Set-Cookie', 'refreshToken=MockedToken;');
        break;
      case 201:
        response = { signUp: true, id: 5 };
        headers.set('Set-Cookie', 'accessToken=MockedToken;');
        headers.append('Set-Cookie', 'refreshToken=MockedToken;');
        break;
      case 404:
        response = { message: '존재하지 않는 유저입니다.' };
        break;
    }

    return HttpResponse.json(response, {
      status,
      headers
    });
  }),

  http.get(baseURL('/members/:userId'), async () => {
    await delay(1000);
    return HttpResponse.json(MEMBER_INFO, { status: 200 });
  }),

  http.post(baseURL('/members/modify'), async () => {
    await delay(200);
    return HttpResponse.json({}, { status: 200 });
  }),

  http.get(baseURL('/members/logout'), async () => {
    await delay(1000);
    return HttpResponse.json({}, { status: 200 });
  }),

  http.delete(baseURL('/members'), async () => {
    await delay(1000);
    return HttpResponse.json({}, { status: 200 });
  })
];

export default membersHandlers;
