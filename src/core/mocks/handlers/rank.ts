import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { RANKING } from '../datas/rank';

const rankHandler = [
  http.get(baseURL('/rankings'), async () => {
    delay(1000);
    return HttpResponse.json(RANKING, { status: 200 });
  })
];

export default rankHandler;
