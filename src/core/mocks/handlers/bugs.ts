import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { TODAY_BUGS } from '../datas/todayBugs';
import { bugHistory } from '../datas/bugHistory';
import { myBugs } from '../datas/myBug';

const bugsHandlers = [
  http.get(baseURL('/bugs/today'), async () => {
    await delay(1000);
    return HttpResponse.json(TODAY_BUGS, { status: 200 });
  }),
  http.get(baseURL('/bugs/history'), async () => {
    await delay(1000);
    return HttpResponse.json(bugHistory, { status: 200 });
  }),
  http.get(baseURL('/bugs'), async () => {
    await delay(1000);
    return HttpResponse.json(myBugs, { status: 200 });
  })
];

export default bugsHandlers;
