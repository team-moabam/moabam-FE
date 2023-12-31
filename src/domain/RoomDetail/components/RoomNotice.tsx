import { useState, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/Icon';

interface RoomNoticeProps {
  content: string;
}

const RoomNotice = ({ content }: RoomNoticeProps) => {
  const [open, setOpen] = useState(false);
  const paraRef = useRef<HTMLParagraphElement>(null);

  const InfoStyle = {
    container: clsx(
      'absolute top-16 z-[1] flex w-full cursor-default items-start gap-2 bg-[rgba(0,0,0,0.3)] px-[0.69rem] text-white'
    ),
    button: 'flex w-4 items-center justify-center mt-[0.1rem]',
    para: clsx('w-full overflow-hidden font-IMHyemin-bold text-xs', {
      'h-4 truncate': open === false,
      'h-full': open === true
    })
  };

  return (
    <>
      {content && (
        <div className={InfoStyle.container}>
          <div
            className="flex w-full gap-2 py-[0.56rem]"
            onClick={() =>
              setOpen((prev) => {
                if (
                  paraRef.current &&
                  paraRef.current?.clientWidth >= paraRef.current?.scrollWidth
                )
                  return false;
                return !prev;
              })
            }
          >
            <Icon
              className={InfoStyle.button}
              icon="AiFillNotification"
              size="sm"
            />

            <p
              ref={paraRef}
              className={InfoStyle.para}
            >
              {content}
            </p>
          </div>
          {open && (
            <button
              className={`${InfoStyle.button} pt-[0.56rem]`}
              onClick={() => setOpen(false)}
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
