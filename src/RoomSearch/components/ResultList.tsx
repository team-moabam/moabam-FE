import { useInfiniteQuery } from '@tanstack/react-query';
import { RoomSelectType } from '@/core/types';
import roomAPI from '@/core/api/functions/roomAPI';
import ResultListFallback from './ResultListFallback';
import { RoomAccordion } from '@/RoomList';

interface ResultListProps {
  type: RoomSelectType;
}

const ResultList = ({ type }: ResultListProps) => {
  const { fetchNextPage, hasNextPage, data, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['rooms', type],
      queryFn: ({ pageParam }) =>
        roomAPI.getRoomsAll({ page: pageParam, type, size: 5 }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam) =>
        lastPage.length < 5 ? null : lastPageParam + 1
    });

  return (
    <div className="flex flex-col gap-2">
      {data?.pages.map((rooms) =>
        rooms.map((room) => (
          <RoomAccordion
            room={room}
            key={room.id}
          />
        ))
      )}
      {isFetchingNextPage && <ResultListFallback size={5} />}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>다음페이지 로드</button>
      )}
    </div>
  );
};

export default ResultList;
