import { useInfiniteQuery } from '@tanstack/react-query';

import { RoomSelectType } from '@/core/types';
import roomAPI from '@/core/api/functions/roomAPI';
import { RoomAccordion } from '@/RoomList';

interface ResultListProps {
  type: RoomSelectType;
}

const ResultList = ({ type }: ResultListProps) => {
  const { fetchNextPage, hasNextPage, data } = useInfiniteQuery({
    queryKey: ['rooms', type],
    queryFn: ({ pageParam }) => roomAPI.getRoomsAll({ page: pageParam, type }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) =>
      lastPage.length < 10 ? null : lastPageParam + 1
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
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>다음페이지 로드</button>
      )}
    </div>
  );
};

export default ResultList;
