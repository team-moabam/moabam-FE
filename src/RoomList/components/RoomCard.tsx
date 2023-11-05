import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';
import CertifyButton from './CertifyButton';
import BugInfo from './BugInfo';
import { RoomSummary } from '@/RoomSummary';
import { ParticipateRoom } from '@/core/types/myJoinRoom';
interface RoomCardProps {
  room: ParticipateRoom;
}
const RoomCard = ({ room }: RoomCardProps) => {
  const moveTo = useMoveRoute();
  const { roomId, isCertifiedToday, bug } = room;
  return (
    <div
      onClick={() => moveTo('roomDetail', { roomId })}
      className={clsx(
        'flex justify-between overflow-hidden',
        'cursor-pointer hover:ring-2',
        'rounded-2xl bg-light-sub p-3 shadow dark:bg-dark-sub',
        'ring-light-point ring-opacity-[0.5] duration-200 dark:ring-dark-point dark:ring-opacity-[0.5]'
      )}
    >
      <RoomSummary {...room} />
      <div className="flex flex-col justify-between">
        <BugInfo bug={bug} />
        <CertifyButton
          roomId={roomId}
          isCertifiedToday={isCertifiedToday}
        />
      </div>
    </div>
  );
};

export default RoomCard;
