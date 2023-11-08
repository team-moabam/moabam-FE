import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';
import roomListStyle from '@/RoomList/styles/roomListStyle';
import { Icon } from '@/shared/Icon';

const BlankCard = () => {
  const moveTo = useMoveRoute();
  return (
    <div
      onClick={() => moveTo('createRoom')}
      className={clsx(
        'flex items-center justify-center rounded-2xl p-6',
        'text-light-point dark:text-dark-point',
        'hover:text-light-point-hover dark:text-dark-point-hover',
        'cursor-pointer hover:ring-2',
        roomListStyle['bg-room-card'],
        roomListStyle['ring-room-card']
      )}
    >
      <Icon
        icon="FaPlusCircle"
        size="4xl"
      />
    </div>
  );
};

export default BlankCard;
