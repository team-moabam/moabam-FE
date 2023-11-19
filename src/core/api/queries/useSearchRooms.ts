import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { RoomSelectType } from '@/core/types';
import roomAPI from '../functions/roomAPI';

const useSearchRooms = ({
  type,
  keyword
}: {
  type: RoomSelectType;
  keyword: string;
}) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['rooms', type, keyword],

    queryFn: ({ pageParam }) =>
      roomAPI.getRoomsAll({ type, roomId: pageParam, keyword }),

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.rooms.at(-1)?.id : null,

    select: ({ pages }) => pages
  });
};

export default useSearchRooms;
