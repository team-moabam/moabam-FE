// TODO: MSW로 API를 모킹하는 방법을 나타낸 예시 코드에요. 이후에 모킹 함수가 적당히 나온다면 삭제해도 좋은 파일이에요.
import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { ALL_COMMENT } from '../datas/comments';

const exampleCommentHandlers = [
  http.get(baseURL('/example/comments'), async () => {
    await delay(200);
    return HttpResponse.json(ALL_COMMENT);
  }),

  http.get(baseURL('/example/comments/:commentId'), async ({ params }) => {
    await delay(200);
    return HttpResponse.json(ALL_COMMENT[Number(params.commentId) - 1]);
  }),

  http.post(baseURL('/example/comments'), async ({ request }) => {
    try {
      const body = await request.json();
      console.log(body);
    } catch (err) {
      console.error(err);
    }

    await delay(200);
    return HttpResponse.json({ id: 101 });
  }),

  http.put(
    baseURL('/example/comments/:commentId'),
    async ({ request, params }) => {
      try {
        const body = await request.json();
        console.log(body);
      } catch (err) {
        console.error(err);
      }

      await delay(200);
      return HttpResponse.json({ id: params.commentId });
    }
  ),

  http.delete(baseURL('/example/comments/:commentId'), async ({ params }) => {
    await delay(200);
    return HttpResponse.json({ id: params.commentId });
  })
];

export default exampleCommentHandlers;
