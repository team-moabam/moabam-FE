import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { RoomSelectType } from '@/core/types';
import roomAPI from '../functions/roomAPI';

const useSearchRooms = ({
  roomType,
  keyword
}: {
  roomType: RoomSelectType;
  keyword: string;
}) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['rooms', roomType, keyword],

    queryFn: ({ pageParam }) =>
      roomAPI.getRoomsAll({ roomType, roomId: pageParam, keyword }),

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.rooms.at(-1)?.id : null,

    select: ({ pages }) => pages
  });
};

export default useSearchRooms;
