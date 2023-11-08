import { useState, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/Icon';

interface RoomNoticeProps {
  content: string;
}

const RoomNotice = ({ content }: RoomNoticeProps) => {
  const [show, setShow] = useState(true);

  const InfoStyle = {
    container: clsx(
      'absolute top-[4rem] z-[1] flex w-full items-start  bg-[rgba(0,0,0,0.3)] px-[0.69rem] py-[0.56rem] text-white'
    ),
    button: 'flex w-[1rem] items-center justify-center',
    para: clsx(
      ' mr-[0.4rem] min-w-[16.43rem] overflow-hidden font-IMHyemin-bold text-xs',
      {
        'h-[1rem] truncate': show === true,
        'h-full': show === false
      }
    )
  };

  return (
    <div className={InfoStyle.container}>
      <button className={`mr-[0.87rem] ${InfoStyle.button}`}>
        <Icon
          icon="AiFillNotification"
          size="sm"
        />
      </button>
      <p
        className={InfoStyle.para}
        onClick={() => setShow(false)}
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
  );
};

export default RoomNotice;
