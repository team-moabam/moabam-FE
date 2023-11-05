import React from 'react';
import '@/core/styles/button.css';
import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';

interface CerticifyButtonProps {
  isCertifiedToday: boolean;
  roomId: number;
}

const CerticifyButton = ({
  isCertifiedToday,
  roomId
}: CerticifyButtonProps) => {
  const moveTo = useMoveRoute();
  return (
    <div
      onClick={() => !isCertifiedToday && moveTo('roomDetail', { roomId })}
      className={clsx(
        'btn-transition cursor-pointer rounded-2xl px-5 py-1 font-IMHyemin-bold text-sm shadow-md',
        {
          'btn-light-point dark:btn-dark-point': !isCertifiedToday,
          'btn-disabled cursor-default': isCertifiedToday
        }
      )}
    >
      {isCertifiedToday ? '인증완료' : '인증하기'}
    </div>
  );
};

export default CerticifyButton;
