import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';
import roomListStyle from '@/RoomList/styles/roomListStyle';
import { Icon } from '@/shared/Icon';

interface NewRoomCardProps {
  disabled: boolean;
}

const NewRoomCard = ({ disabled }: NewRoomCardProps) => {
  const moveTo = useMoveRoute();
  return (
    <div
      onClick={() => disabled || moveTo('createRoom')}
      className={clsx(
        'flex items-center justify-center rounded-2xl p-6',
        {
          'hover:text-light-point-hover dark:hover:text-dark-point-hover text-light-point dark:text-dark-point':
            !disabled
        },
        'cursor-pointer hover:ring-2',
        roomListStyle['bg-room-card'],
        roomListStyle['ring-room-card'],
        { 'pointer-events-none text-dark-gray dark:text-dark-gray': disabled }
      )}
    >
      {disabled ? (
        '루틴방이 꽉 찼어요!'
      ) : (
        <Icon
          icon="FaPlusCircle"
          size="4xl"
        />
      )}
    </div>
  );
};

export default NewRoomCard;
