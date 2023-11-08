import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';
import { ParticipateRoom } from '@/RoomList/mocks/types/myJoinRoom';
import roomListStyle from '../styles/roomListStyle';
import CertifyButton from './CertifyButton';
import BugInfo from './BugInfo';
import { RoomSummary } from '@/RoomSummary';

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
        'flex justify-between overflow-hidden rounded-2xl p-3',
        'cursor-pointer hover:ring-2',
        roomListStyle['bg-room-card'],
        roomListStyle['ring-room-card']
      )}
    >
      <RoomSummary {...room} />
      <div className="flex shrink-0 flex-col justify-between">
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
