import { RoomSelectType } from '@/core/types';
import { useInfiniteSearch } from '@/core/api/queries';
import ResultListFallback from './ResultListFallback';
import { RoomAccordion } from '@/RoomList';
import { Deffered } from '@/shared/Deffered';

interface ResultListProps {
  type: RoomSelectType;
  size: number;
}

const ResultList = ({ type, size }: ResultListProps) => {
  const { fetchNextPage, hasNextPage, results, isFetchingNextPage } =
    useInfiniteSearch({ type, size });

  return (
    <div className="flex flex-col gap-2">
      {results.map((rooms) =>
        rooms.map((room) => (
          <RoomAccordion
            room={room}
            key={room.id}
          />
        ))
      )}
      {isFetchingNextPage && (
        <Deffered defferTime={0}>
          <ResultListFallback size={size} />
        </Deffered>
      )}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>다음페이지 로드</button>
      )}
    </div>
  );
};

export default ResultList;
