import { Link } from 'react-router-dom';
import { userData } from '../mocks/userData';
import UserProfile from './UserProfile';
import { ProgressBar } from '@/shared/ProgressBar';

const UserMain = () => {
  const { nickname, intro, level, exp, birds, badges, img } = userData;

  return (
    <div className="relative pt-5">
      <UserProfile
        nickname={nickname}
        intro={intro}
        img={img}
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
          변경
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
        {badgeArray.map((badge) => (
          <div
            className="flex h-full w-2/6 flex-col items-center justify-center gap-2 rounded-lg"
            key={badge}
          >
            <div
              className={`h-14 w-14 rounded-full ${
                badges[badge]
                  ? 'bg-light-point dark:bg-dark-point'
                  : 'bg-dark-gray'
              }`}
            />
            <p className="text-center">{badge}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMain;

const badgeArray: ('오목눈이_탄생' | '어른_오목눈이' | '어른_부엉이')[] = [
  '오목눈이_탄생',
  '어른_오목눈이',
  '어른_부엉이'
];
