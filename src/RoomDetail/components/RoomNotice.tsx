import { useRef, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/Icon';

interface RoomNoticeProps {
  content: string;
}

const RoomNotice = ({ content }: RoomNoticeProps) => {
  const [show, setShow] = useState(true);
  const paraRef = useRef<HTMLParagraphElement>(null);

  const InfoStyle = {
    container: clsx(
      'absolute top-16 z-[1] flex w-full items-start  bg-[rgba(0,0,0,0.3)] px-[0.69rem] py-[0.56rem] text-white'
    ),
    button: 'flex w-4 items-center justify-center',
    para: clsx(
      ' mr-[0.4rem] min-w-[16.43rem] overflow-hidden font-IMHyemin-bold text-xs',
      {
        'h-4 truncate': show === true,
        'h-full': show === false
      }
    )
  };

  return (
    <>
      {content && (
        <div className={InfoStyle.container}>
          <button className={`mr-3.5 ${InfoStyle.button}`}>
            <Icon
              icon="AiFillNotification"
              size="sm"
            />
          </button>
          <p
            ref={paraRef}
            className={InfoStyle.para}
            onClick={() => {
              if (
                paraRef.current?.clientWidth &&
                paraRef.current?.clientWidth > 365
              )
                setShow(false);
            }}
          >
            {content}
          </p>
          {!show && (
            <button
              className={InfoStyle.button}
              onClick={() => setShow(true)}
            >
              <Icon
                icon="CgClose"
                size="sm"
              />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default RoomNotice;
