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

  semiDetail: (roomId?: string) =>
    queryOptions({
      queryKey: ['rooms', 'semiDetail', roomId] as const,
      queryFn: () => roomAPI.getRoomSemiDetail(roomId)
    }),

  myJoin: () =>
    queryOptions({
      queryKey: ['rooms', 'myJoin'] as const,
      queryFn: () => roomAPI.getMyJoinRoom()
    }),

  joinHistory: () =>
    queryOptions({
      queryKey: ['rooms', 'joinHistory'] as const,
      queryFn: () => roomAPI.roomJoinHistory()
    }),

  checkRoomJoin: (roomId?: string) =>
    queryOptions({
      queryKey: ['rooms', 'checkRoomJoin'] as const,
      queryFn: () => roomAPI.getCheckRoomJoin(roomId)
    })
};

export default roomOptions;
