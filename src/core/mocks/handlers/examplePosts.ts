// TODO: MSW로 API를 모킹하는 방법을 나타낸 예시 코드에요. 이후에 모킹 함수가 적당히 나온다면 삭제해도 좋은 파일이에요.
import { http, HttpResponse, delay } from 'msw';
import { ALL_POST } from '../datas/posts';

const examplePostHandlers = [
  http.get('/example/posts', async () => {
    await delay(200);
    return HttpResponse.json(ALL_POST);
  }),

  http.get('/example/posts/:postId', async ({ params }) => {
    await delay(200);
    return HttpResponse.json(ALL_POST[Number(params.postId) - 1]);
  }),

  http.post('/example/posts', async ({ request }) => {
    try {
      const body = await request.json();
      console.log(body);
    } catch (err) {
      console.error(err);
    }

    await delay(200);
    return HttpResponse.json({ id: 101 });
  }),

  http.put('/example/posts/:postId', async ({ request, params }) => {
    try {
      const body = await request.json();
      console.log(body);
    } catch (err) {
      console.error(err);
    }

    await delay(200);
    return HttpResponse.json({ id: params.postId });
  }),

  http.delete('/example/posts/:postId', async ({ params }) => {
    await delay(200);
    return HttpResponse.json({ id: params.postId });
  })
];

export default examplePostHandlers;
