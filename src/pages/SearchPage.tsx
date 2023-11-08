import { totalRooms } from '@/RoomList/mocks/totalRooms';
import { RoomAccordion } from '@/RoomList';

const SearchPage = () => {
  const { rooms } = totalRooms;
  return (
    <div className="h-full overflow-auto">
      <div className="flex flex-col gap-3 p-2">
        {rooms.map((room) => (
          <RoomAccordion
            room={room}
            key={room.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
