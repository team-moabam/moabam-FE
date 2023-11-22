import { RoomSelectType } from '@/core/types';
import { useSearchRooms } from '@/core/api/queries';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ResultListFallback from './ResultListFallback';
import { RoomAccordion } from '@/RoomList';
import { Deffered } from '@/shared/Deffered';
import { AccordionGroup } from '@/shared/Accordion';

interface ResultListProps {
  roomType: RoomSelectType;
  keyword: string;
}

const ResultList = ({ roomType, keyword }: ResultListProps) => {
  const { fetchNextPage, data, isFetchingNextPage, hasNextPage } =
    useSearchRooms({ roomType, keyword });

  const intersectionRef = useIntersectionObserver({
    threshold: 0.5,
    onObserve: fetchNextPage
  });

  return (
    <div className="flex flex-col gap-1">
      <AccordionGroup>
        {data.map(({ rooms }) =>
          rooms.map((room) => (
            <RoomAccordion
              room={room}
              key={room.id}
            />
          ))
        )}
      </AccordionGroup>
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
