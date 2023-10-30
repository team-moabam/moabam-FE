import { createPortal } from 'react-dom';
import useToast from './hooks/useToast';

interface ToastProps {
  text: string;
  type: 'info' | 'confirm' | 'danger';
  icon?: boolean;
  subText?: string;
}

const Toast = ({ text, type, icon, subText }: ToastProps) => {
  const [toast, handleOpenToast, handleCloseToast] = useToast(false, 3000);

  const bgColor = {
    info: 'bg-info',
    confirm: 'bg-confirm',
    danger: 'bg-danger'
  };

  console.log('rendering');

  return (
    <>
      <button onClick={handleOpenToast}>click Me!</button>
      {toast && (
        <>
          {createPortal(
            <div
              className={`bottom-[3.25rem] ${
                bgColor[type]
              } absolute left-[50%] flex min-h-[2.75rem] w-fit basis-0 translate-x-[-50%]  animate-toast  ${
                subText
                  ? 'py-[0.5rem] pl-[2.75rem]'
                  : 'items-center pl-[1.56rem]'
              } rounded-[0.5rem] pr-[0.62rem] text-[1rem]`}
            >
              {icon && (
                <div className="absolute left-[0.44rem] top-[0.5rem] mr-[0.75rem] h-[1.5625rem] w-[1.5625rem] bg-[url(/icons/icon-hand-cursor.png)] bg-contain bg-no-repeat"></div>
              )}
              <div className="pr-[1.56rem] text-white">
                <span className="font-IMHyemin-bold">{text}</span>
                {subText && (
                  <>
                    <br />
                    <span>{subText}</span>
                  </>
                )}
              </div>
              <button
                className={`h-[.9375rem] w-[.9375rem] bg-[url(/icons/icon-close-btn.png)] bg-contain bg-no-repeat
                ${subText ? 'mt-[0.3125rem]' : 'items-center'}`}
                onClick={handleCloseToast}
              />
            </div>,
            document.body
          )}
        </>
      )}
    </>
  );
};

export default Toast;
