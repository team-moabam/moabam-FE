import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { RoomSelectType, RoomsAllRequestParams } from '@/core/types';
import roomAPI from '../functions/roomAPI';

const useAllRooms = ({ roomType }: { roomType: RoomSelectType }) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['rooms', roomType],

    queryFn: ({ pageParam }) => {
      const params: RoomsAllRequestParams = {};
      if (roomType !== 'ALL') {
        params.roomType = roomType;
      }
      if (pageParam > 0) {
        params.roomId = pageParam;
      }
      return roomAPI.getRoomsAll(params);
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.rooms.at(-1)?.id : null,

    select: ({ pages }) => pages
  });
};

export default useAllRooms;
