import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { MY_USER_DATA, OTHER_USER_DATA } from '../datas/user';

const userHandlers = [
  http.get(baseURL('/members'), async () => {
    await delay(1000);
    return HttpResponse.json(MY_USER_DATA, { status: 200 });
  }),
  http.get(baseURL('/members/:userId'), async () => {
    await delay(1000);
    return HttpResponse.json(OTHER_USER_DATA, { status: 200 });
  }),
  http.post(baseURL('/members/modify'), async ({ request }) => {
    try {
      const body = await request.json();
      console.log(body);
    } catch (err) {
      console.error(err);
    }
    await delay(200);
    return HttpResponse.json({ id: 101 });
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

export default userHandlers;
