import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';

const bugsHandlers = [
  http.get(baseURL('/bugs/today'), async () => {
    await delay(1000);
    return HttpResponse.json({}, { status: 200 });
  }) // TODO: 나중에 bugs 다른 핸들러 머지되면 삭제하는 코드입니다. 충돌날까봐 남겨둡니다..
];

export default bugsHandlers;
