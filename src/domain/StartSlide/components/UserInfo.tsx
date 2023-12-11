import { useSuspenseQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';
import memberOptions from '@/core/api/options/member';
import { CONTENTS } from '../constants/contents';
import UserBird from './UserBird';

interface UserInfoProps {
  type: 'MORNING' | 'NIGHT';
}

const UserInfo = ({ type }: UserInfoProps) => {
  const { data } = useSuspenseQuery(memberOptions.memberInfo());
  const { nickname, level, birds } = data;

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
      <div className="absolute inset-y-0 m-auto flex h-fit flex-col items-center justify-center">
        <UserBird birdSkin={birds[type]} />
      </div>
    </div>
  );
};

export default UserInfo;
