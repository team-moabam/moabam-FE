import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { TODAY_BUGS } from '../datas/todayBugs';

const bugsHandlers = [
  http.get(baseURL('/bugs/today'), async () => {
    await delay(1000);
    return HttpResponse.json(TODAY_BUGS, { status: 200 });
  })
];

export default bugsHandlers;
