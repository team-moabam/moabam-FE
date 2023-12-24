import { useState } from 'react';
import { clsx } from 'clsx';
import { ProgressBar } from '@/shared/ProgressBar';
import { Icon } from '@/shared/Icon';

interface CertificationProgressProps {
  percentage: number;
  certifyTime: number;
}

const CertificationProgress = ({ percentage }: CertificationProgressProps) => {
  const [showTip, setShowTip] = useState(false);

  return (
    <div className="mb-[0.75rem]">
      <div className="flex items-end justify-between pb-2">
        <div className="flex items-center gap-2">
          <h4 className="text-base text-black dark:text-white">
            오늘의 방 인증율
          </h4>
          <div className="relative select-none">
            <div
              onClick={() => setShowTip((prev) => !prev)}
              className={clsx(
                'flex h-5 w-5 cursor-pointer items-center justify-center rounded-full shadow',
                {
                  'text-dark-gray text-opacity-50': !showTip
                },
                {
                  'text-light-point dark:text-dark-point': showTip
                },
                'bg-white font-IMHyemin-bold text-sm dark:bg-dark-sub'
              )}
            >
              ?
            </div>
            {showTip && (
              <div
                className={clsx(
                  'absolute -left-10 bottom-7 w-[7.2rem] rounded-md p-1 text-xs opacity-30 shadow',
                  'bg-white dark:bg-black'
                )}
              >
                75% 가 넘어야 벌레를 획득할 수 있어요!
              </div>
            )}
          </div>
        </div>
        <span className="text-2xl text-light-point dark:text-dark-point">
          {percentage}%
        </span>
      </div>
      <div className="relative">
        <ProgressBar
          progress={percentage}
          className="rounded-full"
        />
        <div
          className={clsx(
            'absolute inset-y-0 left-3/4 my-auto -translate-x-2',
            'flex h-4 w-4 items-center justify-center',
            'rounded-full bg-light-main dark:bg-dark-main'
          )}
        >
          <Icon
            icon="BiSolidBugAlt"
            className={clsx({
              'text-light-point dark:text-dark-point': percentage >= 75,
              'text-light-gray': percentage < 75
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationProgress;
