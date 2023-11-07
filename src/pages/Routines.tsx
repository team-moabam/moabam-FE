import { myJoinRoom } from '@/RoomList/mocks/myJoinRoom';
import RoomSlide from '@/RoomSlide/components/RoomSlide';

const Routines = () => {
  const { bugs, participateRooms } = myJoinRoom;
  return (
    <div className="flex h-full flex-col">
      <div className="h-full overflow-auto p-8">
        <RoomSlide
          rooms={participateRooms}
          type="MORNING"
          bugs={bugs}
        />
      </div>
    </div>
  );
};

export default Routines;
