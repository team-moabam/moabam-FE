import { myJoinRoom } from '@/RoomList/mocks/myJoinRoom';
import { totalRooms } from '@/RoomList/mocks/rooms';
import RoomCard from '@/RoomList/components/RoomCard';
import RoomAccordion from '@/RoomList/components/RoomAccordion';
import { AccordionGroup } from '@/shared/Accordion';

const Routines = () => {
  const { bugs, participateRooms } = myJoinRoom;
  const { rooms } = totalRooms;
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
        <div className="flex flex-col gap-3 p-2">
          <AccordionGroup buttonColored>
            {rooms.map((room) => (
              <RoomAccordion
                room={room}
                key={room.id}
              />
            ))}
          </AccordionGroup>
        </div>
      </div>
    </div>
  );
};

export default Routines;
