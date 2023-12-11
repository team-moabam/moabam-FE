import { http, HttpResponse } from 'msw';
import { baseURL } from '../baseURL';

const timeHandler = http.get(baseURL('/serverTime'), async () => {
  const date = new Date();
  return HttpResponse.json(date, { status: 200 });
});

export default timeHandler;
