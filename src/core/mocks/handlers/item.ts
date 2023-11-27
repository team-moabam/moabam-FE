import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { MORNING_ITEM, NIGHT_ITEM } from '../datas/item';

const itemHandlers = [
  http.get(baseURL('/items'), async ({ request: { url } }) => {
    const params: { [key: string]: string } = {};
    const urlArray = url.split('?');
    urlArray.shift();
    urlArray[0].split('&').forEach((param) => {
      const a = param.split('=');
      params[a[0]] = a[1];
    });

    if (params.type === 'MORNING') return HttpResponse.json(MORNING_ITEM);
    if (params.type === 'NIGHT') return HttpResponse.json(NIGHT_ITEM);
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

export default itemHandlers;
