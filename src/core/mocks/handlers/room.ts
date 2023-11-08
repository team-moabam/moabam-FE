import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { RoomInfo } from '../datas/room';

const roomHandlers = [
  http.get(baseURL('/rooms/:roomId'), async () => {
    await delay(200);
    return HttpResponse.json({
      data: RoomInfo
    });
  })
];
export default roomHandlers;
