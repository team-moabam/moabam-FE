import CertifyButton from './CertifyButton';
import { RoomSummary } from '@/RoomSummary';
import { ParticipateRoom } from '@/core/types/myJoinRoom';
interface RoomCardProps {
  room: ParticipateRoom;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const { roomId, isCertifiedToday } = room;
  return (
    <div className="flex justify-between rounded-2xl bg-white p-3 shadow">
      <RoomSummary {...room} />
      <div>
        <CertifyButton
          roomId={roomId}
          isCertifiedToday={isCertifiedToday}
        />
      </div>
    </div>
  );
};

export default RoomCard;
