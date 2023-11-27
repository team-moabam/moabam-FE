import { useSuspenseQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { MyJoinRoom, ParticipatingRoom, DayType } from '@/core/types';
import { DAY_TYPE } from '@/RoomSlide/constants/dayType';
import { RoomCard } from '@/RoomList';
import NewRoomCard from './NewRoomCard';

interface RoomDataProps {
  dayType: DayType;
}

const RoomData = ({ dayType }: RoomDataProps) => {
  const { ABOUT_BUG } = DAY_TYPE[dayType];

  const { data } = useSuspenseQuery({
    ...roomOptions.myJoin(),
    select: ({
      participatingRooms
    }: MyJoinRoom): {
      rooms: ParticipatingRoom[];
      bugs: number;
    } => {
      const rooms = participatingRooms.filter(
        ({ roomType }) => roomType === dayType
      );
      const bugs = rooms.reduce(
        (total, { obtainedBugs }) => total + obtainedBugs,
        0
      );
      return { rooms, bugs };
    }
  });

  return (
    <>
      {data.rooms && (
        <div className="flex flex-col gap-2">
          {data.rooms.map((room) => (
            <RoomCard
              room={room}
              key={room.roomId}
            />
          ))}
          <NewRoomCard disabled={data.rooms.length >= 3} />
        </div>
      )}
      <div className="mr-1 mt-4 text-end  text-sm">
        {ABOUT_BUG} :{' '}
        <span className="font-IMHyemin-bold text-light-point-hover dark:text-dark-point-hover">
          {data.bugs} 마리
        </span>
      </div>
    </>
  );
};

export default RoomData;
