import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import useHover from '@/core/hooks/useHover';
import { userData } from '@/StartSlide/mocks/userData';
import { CONTENTS } from '../constants/contents';

interface UserInfoProps {
  type: 'morning' | 'night';
}

const UserInfo = ({ type }: UserInfoProps) => {
  // TODO : /members GET
  const { nickname, level, birds } = userData;
  const birdSkin = type === 'morning' ? birds.MORNING_SKIN : birds.NIGHT_SKIN;
  const [hoverRef, hovered] = useHover<HTMLDivElement>();

  return (
    <div className="absolute h-full w-full overflow-hidden text-white">
      <div className="flex flex-col p-8 dark:items-end">
        <div className="mb-7 text-xl">{CONTENTS.INTRO[type]}</div>
        <div className="mb-4 w-52 break-keep font-IMHyemin-bold text-[2rem] dark:text-end">
          {nickname} 님
        </div>
        <div
          className={clsx(
            'text-sm text-light-point-ring dark:text-dark-point-ring',
            'w-fit rounded-2xl px-3',
            'border border-light-point dark:border-dark-point'
          )}
        >
          Lv {level}
        </div>
      </div>
      <div className="absolute inset-y-0 m-auto flex flex-col items-center justify-center">
        <img
          className="absolute bottom-0 right-0 top-36 z-10 my-auto w-3/4 dark:left-0 dark:-scale-x-100"
          src="/assets/branch.png"
        />
        <motion.div
          className="w-2/5 cursor-pointer"
          whileTap={{ scale: 1.1, transitionDuration: '0.3s' }}
        >
          <img src={birdSkin} />
        </motion.div>
      </div>

      {/* TODO : 페이지 이동 버튼 드래그/스크롤로 바꾸어야 함. 임시! */}
      <div
        ref={hoverRef}
        className={clsx(
          'absolute inset-x-0 bottom-12 mx-auto w-fit',
          'cursor-pointer text-lg',
          'flex flex-col items-center gap-2'
        )}
      >
        {hovered && <div>Click!</div>}
        <Link to={'/routines'}>오늘의 루틴 확인하기</Link>
      </div>
    </div>
  );
};

export default UserInfo;
