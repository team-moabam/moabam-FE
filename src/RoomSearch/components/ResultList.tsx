import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { RoomSelectType, TotalRooms } from '@/core/types';
import { RoomAccordion } from '@/RoomList';

interface ResultListProps {
  type: RoomSelectType;
}

const ResultList = ({ type }: ResultListProps) => {
  const { data: rooms } = useQuery({
    ...roomOptions.all({ type }),
    select: ({ rooms }: TotalRooms) => rooms
  });

  return (
    <div className="flex flex-col gap-2">
      {rooms?.map((room) => (
        <RoomAccordion
          room={room}
          key={room.id}
        />
      ))}
    </div>
  );
};

export default ResultList;
