import { queryOptions } from '@tanstack/react-query';
import roomAPI from '../functions/roomAPI';

const roomOptions = {
  detail: (roomId: string) =>
    queryOptions({
      queryKey: ['rooms', 'detail', roomId] as const,
      queryFn: () => roomAPI.getRoomDetail(roomId)
    }),

  detailByDate: (roomId: string | undefined, date: string) =>
    queryOptions({
      queryKey: ['rooms', 'detail', roomId, date] as const,
      queryFn: () => roomAPI.getRoomDetailByDate(roomId, date)
    }),

  myJoin: () =>
    queryOptions({
      queryKey: ['rooms', 'myJoin'] as const,
      queryFn: () => roomAPI.getMyJoinRoom()
    })
};

export default roomOptions;
