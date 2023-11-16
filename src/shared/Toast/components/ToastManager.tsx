import { useCallback, useState, useEffect } from 'react';
import { v4 } from 'uuid';
import ToastItem from './ToastItem';

interface ToastManagerProps {
  bind: (
    fn: (
      toastOption: {
        status: string;
        message: string;
        icon?: boolean;
        subText?: string;
      },
      duration: number
    ) => void
  ) => void;
}

const ToastManager = ({ bind }: ToastManagerProps) => {
  const [toasts, setToasts] = useState<
    {
      id: string;
      status: string;
      message: string;
      duration: number;
      icon?: boolean;
      subText?: string;
    }[]
  >([]);

  const createToast = useCallback(
    (toastOption: { status: string; message: string }, duration: number) => {
      const newToast = {
        id: v4(),
        duration,
        ...toastOption
      };

      setToasts((oldToasts) => [...oldToasts, newToast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <div className="absolute bottom-[3.25rem] left-[50%] flex min-h-[2.75rem] w-full translate-x-[-50%] flex-col items-center">
      {toasts.map(({ id, status, message, subText, icon, duration }) => (
        <ToastItem
          status={status}
          message={message}
          duration={duration}
          subText={subText}
          icon={icon}
          key={id}
          onDone={() => removeToast(id)}
        />
      ))}
    </div>
  );
};

export default ToastManager;
