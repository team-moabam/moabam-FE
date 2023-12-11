import React from 'react';
import { TotalRooms } from '@/core/types';
import { AccordionGroup } from '@/shared/Accordion';
import { Deffered } from '@/shared/Deffered';
import { RoomAccordion } from '@/domain/RoomList';
import ResultListFallback from './ResultListFallback';

interface InfiniteScrollOptions {
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  intersectionRef: React.RefObject<HTMLDivElement>;
}
interface ResultListProps {
  data: TotalRooms[];
  infiniteScrollOptions: InfiniteScrollOptions;
}

const ResultList = ({ data, infiniteScrollOptions }: ResultListProps) => {
  const { isFetchingNextPage, hasNextPage, intersectionRef } =
    infiniteScrollOptions;

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
