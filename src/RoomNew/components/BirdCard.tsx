import clsx from 'clsx';
import { RoomType, BIRD, TIME_RANGE } from '../constants/roomLiterals';

interface BirdCardProps {
  active?: boolean;
  type: RoomType;
  onClick: VoidFunction;
}

const BirdCard = ({ active = false, type, onClick }: BirdCardProps) => {
  return (
    <div
      className={clsx(
        'flex h-48 grow cursor-pointer select-none flex-col items-center justify-center rounded-xl border-3 bg-white',
        active ? 'border-light-point' : 'border-transparent'
      )}
      onClick={onClick}
    >
      <img
        src={BIRD[type].image}
        className="w-20"
      />
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
