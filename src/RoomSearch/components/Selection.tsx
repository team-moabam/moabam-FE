import React from 'react';
import { clsx } from 'clsx';
import { RoomSelectType } from '@/core/types';

interface SelectionProps {
  currentRoomType: RoomSelectType;
  setRoomType: React.Dispatch<React.SetStateAction<RoomSelectType>>;
}

const TYPES = ['all', 'morning', 'night'] as const;
const typeMap = {
  all: '전체',
  morning: '아침',
  night: '밤'
};

const Selection = ({ currentRoomType, setRoomType }: SelectionProps) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-2',
        'bg-light-main dark:bg-dark-main'
      )}
    >
      {TYPES.map((type) => (
        <div
          className={clsx(
            'w-14 rounded-2xl py-1 text-center',
            'bg-light-point dark:bg-dark-point-hover',
            'transition-[background] duration-300',
            {
              'font-IMHyemin-bold text-white dark:text-black':
                type === currentRoomType,
              'bg-opacity-[0] hover:bg-opacity-[0.4] dark:hover:bg-opacity-[0.4] cursor-pointer dark:bg-opacity-[0]':
                type !== currentRoomType
            }
          )}
          onClick={() => setRoomType(type)}
          key={type}
        >
          {typeMap[type]}
        </div>
      ))}
    </div>
  );
};

export default Selection;
