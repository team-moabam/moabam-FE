import { RoomSelectType } from '@/core/types';
import { useInfiniteSearch } from '@/core/api/queries';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ResultListFallback from './ResultListFallback';
import { RoomAccordion } from '@/RoomList';
import { Deffered } from '@/shared/Deffered';

interface ResultListProps {
  type: RoomSelectType;
  size: number;
}

const ResultList = ({ type, size }: ResultListProps) => {
  const { fetchNextPage, results, isFetchingNextPage } = useInfiniteSearch({
    type,
    size
  });
  const [intersectionRef] = useIntersectionObserver({
    threshold: 0.5,
    onObserve: fetchNextPage
  });

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
        <Deffered>
          <ResultListFallback size={size} />
        </Deffered>
      )}
      <div
        ref={intersectionRef}
        className="h-4"
      ></div>
    </div>
  );
};

export default ResultList;
