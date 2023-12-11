import React from 'react';
import '@/core/styles/button.css';
import { clsx } from 'clsx';

interface CerticifyButtonProps {
  isCertifiedToday: boolean;
}

const CerticifyButton = ({ isCertifiedToday }: CerticifyButtonProps) => {
  return (
    <div
      className={clsx(
        'w-20 rounded-2xl py-[0.15rem] text-center text-sm text-white',
        {
          'bg-light-point dark:bg-dark-point-hover': isCertifiedToday,
          'bg-disabled': !isCertifiedToday
        }
      )}
    >
      {isCertifiedToday ? '인증완료' : '미인증'}
    </div>
  );
};

export default CerticifyButton;
