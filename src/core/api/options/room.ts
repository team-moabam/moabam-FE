import { queryOptions } from '@tanstack/react-query';
import roomAPI from '../functions/roomAPI';
import { DayType } from '@/core/types/Room';

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
      // select: ({ participatingRooms }) =>
      //   participatingRooms.filter(({ type }) => type === dayType)
    })
};

export default roomOptions;
