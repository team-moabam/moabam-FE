import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';

const membersHandlers = [
  http.get(baseURL('/members/login/kakao/oauth'), async () => {
    await delay(1000);

    const status: number = 200;
    let response = {};
    const headers = new Headers();

    switch (status) {
      case 200:
        response = { signUp: false, memberId: 5 };
        headers.set('Set-Cookie', 'accessToken=MockedToken;');
        headers.append('Set-Cookie', 'refreshToken=MockedToken;');
        break;
      case 201:
        response = { signUp: true, memberId: 5 };
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
  })
];

export default membersHandlers;
