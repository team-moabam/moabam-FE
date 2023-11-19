import { RoomSelectType } from '@/core/types';
import { useSearchRooms } from '@/core/api/queries';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ResultListFallback from './ResultListFallback';
import { RoomAccordion } from '@/RoomList';
import { Deffered } from '@/shared/Deffered';

interface ResultListProps {
  type: RoomSelectType;
  keyword: string;
}

const ResultList = ({ type, keyword }: ResultListProps) => {
  const { fetchNextPage, data, isFetchingNextPage, hasNextPage } =
    useSearchRooms({ type, keyword });

  const intersectionRef = useIntersectionObserver({
    threshold: 0.5,
    onObserve: fetchNextPage
  });

  return (
    <div className="flex flex-col gap-2">
      {data.map(({ rooms }) =>
        rooms.map((room) => (
          <RoomAccordion
            room={room}
            key={room.id}
          />
        ))
      )}
      {isFetchingNextPage && (
        <Deffered>
          <ResultListFallback size={10} />
        </Deffered>
      )}
      {hasNextPage ? (
        <div
          ref={intersectionRef}
          className="h-4"
        ></div>
      ) : (
        <div className="my-4 text-center text-sm text-dark-gray">
          모든 방을 다 불러왔어요.
        </div>
      )}
    </div>
  );
};

export default ResultList;
