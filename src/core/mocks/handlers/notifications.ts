import { http, HttpResponse } from 'msw';
import { baseURL } from '../baseURL';

const notificationsHandlers = [
  http.post(baseURL('/notifications'), async () => {
    return HttpResponse.json(null, { status: 200 });
  })
];

export default notificationsHandlers;
