import { queryOptions } from '@tanstack/react-query';
import { RoomsRequestParams } from '@/core/types';
import roomAPI from '../functions/roomAPI';

const roomOptions = {
  detail: (roomId: string) =>
    queryOptions({
      queryKey: ['rooms', 'detail', roomId] as const,
      queryFn: () => roomAPI.getRoomDetail(roomId)
    }),

  detailByDate: (roomId: string, date: string) =>
    queryOptions({
      queryKey: ['rooms', 'detail', roomId, date] as const,
      queryFn: () => roomAPI.getRoomDetailByDate(roomId, date)
    }),

  myJoin: () =>
    queryOptions({
      queryKey: ['rooms', 'myJoin'] as const,
      queryFn: () => roomAPI.getMyJoinRoom()
    }),

  all: (params?: RoomsRequestParams) =>
    queryOptions({
      queryKey: ['rooms', params?.roomType || 'all'] as const,
      queryFn: () => roomAPI.getRoomsAll(params)
    })
};

export default roomOptions;
