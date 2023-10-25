// TODO: MSW로 API를 모킹하는 방법을 나타낸 예시 코드에요. 이후에 모킹 함수가 적당히 나온다면 삭제해도 좋은 파일이에요.
import { http, HttpResponse, delay } from 'msw';
import { ALL_COMMENTS } from '../datas/comments';

const commentHandlers = [
  http.get('/example/comments', async () => {
    await delay(200);
    return HttpResponse.json(ALL_COMMENTS);
  }),

  http.get('/example/comments/:commentId', async ({ params }) => {
    await delay(200);
    return HttpResponse.json(ALL_COMMENTS[Number(params.commentId) - 1]);
  }),

  http.post('/example/comments', async ({ request }) => {
    try {
      const body = await request.json();
      console.log(body);
    } catch (err) {
      console.error(err);
    }

    await delay(200);
    return HttpResponse.json({ id: 101 });
  }),

  http.put('/example/comments/:commentId', async ({ request, params }) => {
    try {
      const body = await request.json();
      console.log(body);
    } catch (err) {
      console.error(err);
    }

    await delay(200);
    return HttpResponse.json({ id: params.commentId });
  }),

  http.delete('/example/comments/:commentId', async ({ params }) => {
    await delay(200);
    return HttpResponse.json({ id: params.commentId });
  })
];

export default commentHandlers;
