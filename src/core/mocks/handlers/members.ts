import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';

const membersHandlers = [
  http.get(baseURL('/members'), async () => {
    await delay(1000);

    const status: number = 200;
    let response = {};

    switch (status) {
      case 200:
        response = {
          message:
            '현재 로그인 된 상태에요. 당신의 개인 Member 정보를 보내줄게요.'
        };
        break;
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
