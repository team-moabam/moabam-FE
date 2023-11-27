import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';
import { ParticipatingRoom } from '@/core/types';
import { RoomSummary } from '@/RoomSummary';
import roomListStyle from '../styles/roomListStyle';
import CertifyButton from './CertifyButton';
import BugInfo from './BugInfo';

interface RoomCardProps {
  room: ParticipatingRoom;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const moveTo = useMoveRoute();
  const { roomId, isMemberCertifiedToday, obtainedBugs } = room;

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
        <BugInfo bug={obtainedBugs} />
        <CertifyButton isCertifiedToday={isMemberCertifiedToday} />
      </div>
    </div>
  );
};

export default RoomCard;
