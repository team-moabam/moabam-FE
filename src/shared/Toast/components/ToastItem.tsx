import { useState } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@/shared/Icon';
import useTimeout from '../hooks/useTimeout';

interface ToastItemProps {
  status: string;
  message: string;
  duration: number;
  onDone: () => void;
  icon?: boolean;
  subText?: string;
}

const ToastItem = ({
  status,
  message,
  subText,
  icon,
  duration,
  onDone // type
}: ToastItemProps) => {
  const [show, setShow] = useState(true);

  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), 400);
  }, duration);

  const ToastStyle = {
    toastContainer: twMerge(
      clsx(
        'flex min-h-[2.75rem] w-fit items-start rounded-lg p-[0.62rem] text-base opacity-100 transition-opacity [&:not(first-of-type)]:mb-2',
        {
          'bg-info': status === 'info',
          'bg-confirm': status === 'confirm',
          'bg-danger': status === 'danger',
          'opacity-0': !show,
          'opacity-100': show
        }
      ),
      'duration-[0.4s] ease-out'
    )
  };

  return (
    <div className={ToastStyle.toastContainer}>
      {icon && (
        <Icon
          icon="BiSolidHandRight"
          size="2xl"
          className=" text-white"
        />
      )}
      <div className="pl-[0.94rem] pr-[1.56rem] text-white">
        <span className="font-IMHyemin-bold">{message}</span>
        {subText && (
          <>
            <br />
            <span>{subText}</span>
          </>
        )}
      </div>
      <button
        className="text-white"
        onClick={onDone}
      >
        <Icon
          icon="CgClose"
          size="2xl"
        />
      </button>
    </div>
  );
};

export default ToastItem;
