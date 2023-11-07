import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';
import { Icon } from '@/shared/Icon';
import '@/RoomList/styles/roomList.css';

const BlankCard = () => {
  const moveTo = useMoveRoute();
  return (
    <div
      onClick={() => moveTo('createRoom')}
      className={clsx(
        'room-card-bg flex items-center justify-center rounded-2xl p-6',
        'text-light-point dark:text-dark-point',
        'hover:text-light-point-hover dark:text-dark-point-hover',
        'room-card-ring cursor-pointer hover:ring-2'
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
