import { ParticipateRoom } from '@/RoomList/mocks/types/myJoinRoom';
import { DAY_TYPE } from '../constants/dayType';
import BlankCard from './BlankCard';
import { RoomCard } from '@/RoomList';

interface RoomSlideProps {
  type: 'MORNING' | 'NIGHT';
  rooms: ParticipateRoom[];
  bugs: number;
}

const RoomSlide = ({ type, rooms, bugs }: RoomSlideProps) => {
  const { TITLE, START, END, ABOUT_BUG } = DAY_TYPE[type];

  return (
    <div className="h-full overflow-auto p-8">
      <div className="mb-5 flex items-end gap-3">
        <div className="font-IMHyemin-bold text-xl">{TITLE}</div>
        <div className="text-sm text-dark-gray">
          {START} ~ {END}시
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {rooms.map((room) => (
          <RoomCard
            room={room}
            key={room.roomId}
          />
        ))}
        <BlankCard />
      </div>
      <div className="mr-1 mt-4 text-end font-IMHyemin-bold text-sm">
        {ABOUT_BUG} : {bugs}
      </div>
    </div>
  );
};

export default RoomSlide;
