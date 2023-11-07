import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';
import { ParticipateRoom } from '@/RoomList/mocks/types/myJoinRoom';
import CertifyButton from './CertifyButton';
import BugInfo from './BugInfo';
import { RoomSummary } from '@/RoomSummary';
import '@/RoomList/styles/roomList.css';

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
        'flex justify-between overflow-hidden p-3',
        'cursor-pointer hover:ring-2',
        'room-card-bg room-card-ring rounded-2xl'
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
