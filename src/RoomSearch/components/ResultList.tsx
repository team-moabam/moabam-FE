import { Room } from '@/RoomList/mocks/types/rooms';
import { RoomAccordion } from '@/RoomList';

interface ResultListProps {
  rooms: Room[];
}

const ResultList = ({ rooms }: ResultListProps) => {
  return (
    <div className="flex flex-col gap-2">
      {rooms.map((room) => (
        <RoomAccordion
          room={room}
          key={room.id}
        />
      ))}
    </div>
  );
};

export default ResultList;
