import { Link } from 'react-router-dom';
import { useSuspenseQueries } from '@tanstack/react-query';
import userOptions from '@/core/api/options/user';
import UserProfile from './UserProfile';
import { ProgressBar } from '@/shared/ProgressBar';

interface UserMainProps {
  userId: string | undefined;
}

const UserMain = ({ userId = '' }: UserMainProps) => {
  const [
    {
      data: { nickname, intro, level, exp, birds, badges, profile_image }
    }
  ] = useSuspenseQueries({
    queries: [
      {
        ...userOptions.user(userId)
      }
    ]
  });

  return (
    <div className="relative pt-5">
      <UserProfile
        nickname={nickname}
        intro={intro}
        profile_image={profile_image}
      />
      <div className="my-2 mt-4 flex w-full items-end justify-between">
        <div className="text-xl text-light-point dark:text-dark-point">
          Lv {level}
        </div>
        <div>{exp} / 10</div>
      </div>
      <ProgressBar
        progress={(exp / 10) * 100}
        className="rounded-full "
      />
      <div className="mb-3 mt-8 flex w-full justify-between">
        <h1>대표 새</h1>
        <Link
          to="/mybird"
          className="cursor-pointer text-light-point dark:text-dark-point"
        >
          스킨 변경
        </Link>
      </div>
      <div className="flex w-full justify-center gap-4">
        <div className="flex aspect-[3/4] w-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-light-sub text-lg dark:bg-dark-sub">
          <div className="aspect-square w-1/2 overflow-hidden rounded-full bg-slate-400">
            <img
              src={birds.MORNING_SKIN}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>오목눈이</div>
        </div>
        <div className="flex aspect-[3/4] w-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-light-sub text-lg dark:bg-dark-sub">
          <div className="aspect-square w-1/2 overflow-hidden rounded-full bg-slate-400">
            <img
              src={birds.NIGHT_SKIN}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>부엉이</div>
        </div>
      </div>
      <div className="mb-3 mt-8 flex w-full justify-between">
        <h1>뱃지</h1>
      </div>
      <div className="flex h-36 w-full rounded-lg  text-sm">
        {badges.slice(0, 3).map(({ name, Success }) => (
          <div
            className="flex h-full w-2/6 flex-col items-center justify-center gap-2 rounded-lg"
            key={name}
          >
            <div
              className={`h-14 w-14 rounded-full ${
                Success ? 'bg-light-point dark:bg-dark-point' : 'bg-dark-gray'
              }`}
            />
            <p className="text-center">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMain;
