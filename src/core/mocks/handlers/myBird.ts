import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { birdItems } from '../datas/myBird';

const myBirdHandlers = [
  http.get(baseURL('/items'), async () => {
    await delay(200);
    return HttpResponse.json(birdItems);
  }),
  http.post(baseURL(`/items/:itemId/purchase`), async () => {
    await delay(1000);
    return HttpResponse.json({}, { status: 200 });
  }),
  http.post(baseURL(`/items/:itemId/select`), async () => {
    await delay(1000);
    return HttpResponse.json({}, { status: 200 });
  })
];

export default myBirdHandlers;
