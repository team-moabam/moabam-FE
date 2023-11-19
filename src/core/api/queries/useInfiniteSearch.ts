import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { RoomSelectType } from '@/core/types';
import roomAPI from '../functions/roomAPI';

const useInfiniteSearch = (type: RoomSelectType) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['rooms', type],

    queryFn: ({ pageParam }) =>
      roomAPI.getRoomsAll({ type, roomId: pageParam }),

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.rooms.at(-1)?.id : null,

    select: ({ pages }) => pages
  });
};

export default useInfiniteSearch;
