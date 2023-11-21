import React from 'react';
import { clsx } from 'clsx';
import { Icon } from '@/shared/Icon';

interface DisabledCoverProps {
  dueType: 'ended' | 'notStarted';
  startDiff: number;
}

const DisabledCover = ({ dueType, startDiff }: DisabledCoverProps) => {
  return (
    <div className="absolute inset-0 flex justify-center bg-white bg-opacity-[0.7] text-white">
      {dueType === 'ended' ? (
        <span
          className={clsx(
            'mt-20 h-fit rounded-full px-3 py-1 font-IMHyemin-bold',
            'bg-black bg-opacity-[0.3]'
          )}
        >
          종료된 쿠폰입니다
        </span>
      ) : (
        <div
          className={clsx(
            'mt-16 h-36 w-36 rounded-full',
            'border-3 border-white bg-black bg-opacity-[0.4]',
            'flex flex-col items-center gap-3 pt-6'
          )}
        >
          <Icon
            icon="TbConfetti"
            color="white"
            size="3xl"
          />
          <div className="font-IMHyemin-bold text-3xl">D-{startDiff}</div>
        </div>
      )}
    </div>
  );
};

export default DisabledCover;
