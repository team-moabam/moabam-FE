import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { userData } from '../datas/user';

const userHandlers = [
  http.get(baseURL('/members/:userId'), async () => {
    await delay(1000);
    return HttpResponse.json(userData, { status: 200 });
  }),
  http.put(baseURL('/members'), async ({ request }) => {
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
