import { myJoinRoom } from '@/RoomList/mocks/myJoinRoom';
import { RoomCard } from '@/RoomList';

const Routines = () => {
  const { bugs, participateRooms } = myJoinRoom;
  return (
    <div className="flex h-full flex-col">
      <div className="h-full overflow-auto">
        <div className="flex flex-col gap-3 p-3">
          {participateRooms.map((room) => (
            <RoomCard
              room={room}
              key={room.roomId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Routines;
