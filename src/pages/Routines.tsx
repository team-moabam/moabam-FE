import { myJoinRoom } from '@/RoomList/mocks/myJoinRoom';
import RoomCard from '@/RoomList/components/RoomCard';
import { Header } from '@/shared/Header';

const Routines = () => {
  const { bugs, participateRooms } = myJoinRoom;
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Routines"
        className=" bg-slate-400 "
      />
      <div className="h-full overflow-auto">
        <div className="flex flex-col gap-3 p-2">
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
