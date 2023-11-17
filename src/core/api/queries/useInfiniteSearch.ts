import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { RoomSelectType } from '@/core/types';
import roomAPI from '../functions/roomAPI';

const useInfiniteSearch = ({
  type,
  size
}: {
  type: RoomSelectType;
  size: number;
}) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['rooms', type],

    queryFn: ({ pageParam }) =>
      roomAPI.getRoomsAll({ page: pageParam, type, size }),

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages, lastPageParam) =>
      lastPage.length < size ? null : lastPageParam + 1,

    select: ({ pages }) => pages
  });
};

export default useInfiniteSearch;
