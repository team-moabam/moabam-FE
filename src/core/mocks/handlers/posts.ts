import { http, HttpResponse } from 'msw';
import { ALL_POST } from '../datas/posts';

export const handlers = [
  // request: express에서 그 req 객체인듯?
  // params: url 파라미터. ex) /posts/:id
  http.get('/posts', ({ request, params, cookies }) => {
    return HttpResponse.json(ALL_POST);
  }),
  http.get('/posts/:id', ({ request, params, cookies }) => {
    console.log(params.id);
    return HttpResponse.json(ALL_POST[Number(params.id) - 1]);
  })
  // TODO: 에러 상태코드 뱉는 핸들러 만들어보기
];
