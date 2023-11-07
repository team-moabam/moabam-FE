import { totalRooms } from '@/RoomList/mocks/totalRooms';
import { RoomAccordion } from '@/RoomList';

const Search = () => {
  const { rooms } = totalRooms;
  return (
    <div className="flex flex-col gap-3 p-2">
      {rooms.map((room) => (
        <RoomAccordion
          room={room}
          key={room.id}
        />
      ))}
    </div>
  );
};

export default Search;
