import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { RoomSelectType, RoomsRequestParams } from '@/core/types';
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

    queryFn: ({ pageParam }) => {
      const params: RoomsRequestParams = {};
      if (roomType !== 'ALL') {
        params.roomType = roomType;
      }
      if (pageParam > 0) {
        params.roomId = pageParam;
      }
      if (keyword) {
        params.keyword = keyword;
      }
      return roomAPI.getRoomsAll(params);
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.rooms.at(-1)?.id : null,

    select: ({ pages }) => pages
  });
};

export default useSearchRooms;
