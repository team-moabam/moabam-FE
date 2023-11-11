import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { clsx } from 'clsx';
import { Icon } from '@/shared/Icon';

interface ToastProps {
  text: string;
  type: 'info' | 'confirm' | 'danger';
  icon?: boolean;
  subText?: string;
  handleCloseToast: () => void;
  toast: boolean;
}

const Toast = ({
  text,
  type,
  icon,
  subText,
  handleCloseToast,
  toast
}: ToastProps) => {
  const ref = useRef(null);

  const ToastStyle = {
    toastContainer: clsx(
      'absolute bottom-[3.25rem] left-[50%] flex min-h-[2.75rem] w-fit basis-0 translate-x-[-50%]  items-start rounded-s-lg p-[0.62rem] text-base transition delay-[0.4s] ease-out',
      {
        'bg-info': type === 'info',
        'bg-confirm': type === 'confirm',
        'bg-danger': type === 'danger'
      },
      {
        'opacity-100': toast === true,
        'opacity-0': toast === false
      }
    )
  };

  return createPortal(
    <div
      className={ToastStyle.toastContainer}
      ref={ref}
    >
      {icon && (
        <Icon
          icon="BiSolidHandRight"
          size="2xl"
          className=" text-white"
        />
      )}
      <div className="pl-[0.94rem] pr-[1.56rem] text-white">
        <span className="font-IMHyemin-bold">{text}</span>
        {subText && (
          <>
            <br />
            <span>{subText}</span>
          </>
        )}
      </div>
      <button
        className="text-white"
        onClick={handleCloseToast}
      >
        <Icon
          icon="CgClose"
          size="2xl"
        />
      </button>
    </div>,
    document.body
  );
};

export default Toast;
