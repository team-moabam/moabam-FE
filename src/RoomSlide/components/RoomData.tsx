import { useSuspenseQueries } from '@tanstack/react-query';
import { roomOptions, bugOptions } from '@/core/api/options';
import {
  MyJoinRoom,
  ParticipatingRoom,
  DayType,
  TodayBugs
} from '@/core/types';
import { DAY_TYPE } from '@/RoomSlide/constants/dayType';
import NewRoomCard from './NewRoomCard';
import { RoomCard } from '@/RoomList';

interface RoomDataProps {
  dayType: DayType;
}

const RoomData = ({ dayType }: RoomDataProps) => {
  const { ABOUT_BUG } = DAY_TYPE[dayType];

  const [{ data: rooms }, { data: bugs }] = useSuspenseQueries({
    queries: [
      {
        ...roomOptions.myJoin(),
        select: ({ participatingRooms }: MyJoinRoom): ParticipatingRoom[] =>
          participatingRooms.filter(({ type }) => type === dayType)
      },
      {
        ...bugOptions.today(),
        select: ({ morningBug, nightBug }: TodayBugs): number =>
          dayType === 'MORNING' ? morningBug : nightBug
      }
    ]
  });

  return (
    <>
      {rooms && (
        <div className="flex flex-col gap-2">
          {rooms.map((room) => (
            <RoomCard
              room={room}
              key={room.roomId}
            />
          ))}
          <NewRoomCard disabled={rooms.length >= 3} />
        </div>
      )}
      <div className="mr-1 mt-4 text-end font-IMHyemin-bold text-sm">
        {ABOUT_BUG} : {bugs ?? 0}
      </div>
    </>
  );
};

export default RoomData;
