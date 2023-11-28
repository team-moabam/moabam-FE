import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RoomInfo } from '@/core/types/Room';
import { BIRD, TIME_RANGE } from '@/RoomForm/constants/literals';

interface BirdCardProps {
  active?: boolean;
  disabled?: boolean;
  type: RoomInfo['roomType'];
  onClick: VoidFunction;
}

const BirdCard = ({
  active = false,
  disabled = false,
  type,
  onClick
}: BirdCardProps) => {
  const handleSelect = () => {
    if (disabled) {
      return;
    }

    onClick();
  };

  return (
    <div
      className={twMerge(
        'flex p-4 grow cursor-pointer select-none flex-col items-center justify-center rounded-xl border-3 bg-white text-black dark:bg-dark-sub dark:text-white',
        active
          ? 'border-light-point dark:border-dark-point'
          : 'border-transparent',
        disabled && 'cursor-not-allowed opacity-50'
      )}
      onClick={handleSelect}
    >
      <div className={clsx('w-24 rounded-full', BIRD[type].bg)}>
        <img
          src={BIRD[type].image}
          className="p-4"
        />
      </div>
      <div className="pt-2 text-center leading-8">
        <b>{BIRD[type].name}</b>
        <p className="text-sm text-dark-gray">
          {TIME_RANGE[type][0] % 24}시 ~ {TIME_RANGE[type][1] % 24}시
        </p>
      </div>
    </div>
  );
};

export default BirdCard;
