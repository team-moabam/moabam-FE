import React from 'react';
import { clsx } from 'clsx';
import { SelectType } from '../types/search';

interface SelectionProps {
  currentType: SelectType;
  setType: React.Dispatch<React.SetStateAction<SelectType>>;
}

const TYPES = ['all', 'morning', 'night'] as const;
const typeMap = {
  all: '전체',
  morning: '아침',
  night: '밤'
};

const Selection = ({ currentType, setType }: SelectionProps) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-2',
        'bg-light-main dark:bg-dark-main',
        'shadow-xl shadow-light-main dark:shadow-dark-main'
      )}
    >
      {TYPES.map((type) => (
        <div
          className={clsx(
            'w-14 rounded-2xl py-1 text-center',
            'bg-light-point dark:bg-dark-point',
            'transition-[background] duration-300',
            {
              'font-IMHyemin-bold  text-white dark:text-black':
                type === currentType,
              'bg-opacity-[0] hover:bg-opacity-[0.4] cursor-pointer':
                type !== currentType
            }
          )}
          onClick={() => setType(type)}
        >
          {typeMap[type]}
        </div>
      ))}
    </div>
  );
};

export default Selection;
