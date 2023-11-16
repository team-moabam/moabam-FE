import { queryOptions } from '@tanstack/react-query';
import { RoomsRequestParams } from '@/core/types';
import roomAPI from '../functions/roomAPI';

const roomOptions = {
  detail: (roomId: string) =>
    queryOptions({
      queryKey: ['rooms', 'detail', roomId] as const,
      queryFn: () => roomAPI.getRoomDetail(roomId)
    }),

  myJoin: () =>
    queryOptions({
      queryKey: ['rooms', 'myJoin'] as const,
      queryFn: () => roomAPI.getMyJoinRoom()
    }),

  all: (params: RoomsRequestParams) =>
    queryOptions({
      queryKey: ['rooms', params.type || 'all'] as const,
      queryFn: () => roomAPI.getRoomsAll(params)
    })
};

export default roomOptions;
