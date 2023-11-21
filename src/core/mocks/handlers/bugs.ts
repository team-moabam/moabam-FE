import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { TODAY_BUGS } from '../datas/todayBugs';
import { BUG_HISTORY } from '../datas/bugHistory';
import { MY_BUGS } from '../datas/myBug';

const bugsHandlers = [
  http.get(baseURL('/bugs/today'), async () => {
    await delay(1000);
    return HttpResponse.json(TODAY_BUGS, { status: 200 });
  }),
  http.get(baseURL('/bugs/history'), async () => {
    await delay(1000);
    return HttpResponse.json(BUG_HISTORY, { status: 200 });
  }),
  http.get(baseURL('/bugs'), async () => {
    await delay(1000);
    return HttpResponse.json(MY_BUGS, { status: 200 });
  })
];

export default bugsHandlers;
