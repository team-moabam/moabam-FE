import { Link } from 'react-router-dom';
import { BiSolidBugAlt } from 'react-icons/bi';
import { ProgressBar } from '@/shared/ProgressBar';
import UserProfile from '@/UserProfile/components/UserProfile';
import UserEtc from '@/UserEtc/components/UserEtc';

const UserPage = () => {
  const { nickname, intro, level, exp, birds, badges } = {
    nickname: '자려고 사는 사람',
    intro: '너무나 졸린사람',
    level: 3,
    exp: 6,
    birds: {
      MORNING_SKIN:
        'https://i.pinimg.com/564x/9d/1d/81/9d1d81196806e7a2829f94f67ccc3248.jpg',
      NIGHT_SKIN:
        'https://i.pinimg.com/564x/f4/9d/21/f49d217cae2f110e8acee4ed1f120483.jpg'
    },
    badges: {
      오목눈이_탄생: true,
      어른_오목눈이: false,
      어른_부엉이: false,
      부엉이_탄생: true
    }
  };
  const bugs = {
    morningBug: 4,
    nightBug: 3,
    goldenBug: 100
  };

  return (
    <div className="h-screen overflow-scroll  pb-20">
      <UserProfile
        intro={intro}
        nickname={nickname}
      />
      <div className="px-5">
        <div className="my-2 mt-4 flex w-full items-end justify-between">
          <div className="text-xl text-light-point">Lv {level}</div>
          <div>{exp} / 10</div>
        </div>
        <ProgressBar
          progress={(exp / 10) * 100}
          className="rounded-full "
        />
        <div className="mb-3 mt-8 flex w-full justify-between">
          <div>대표 새</div>
          <Link
            to="/mybird"
            className="cursor-pointer text-light-point"
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
          <div>뱃지</div>
          <div className="cursor-pointer text-light-point">더보기</div>
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
        <div className="mb-3 mt-8 flex w-full justify-between">
          <div>
            그 외{' '}
            <span className="text-dark-gray">
              (다른사람들에게 공개되지 않아요)
            </span>
          </div>
        </div>
        <div className="flex h-28 w-full rounded-2xl bg-light-sub dark:bg-dark-sub">
          {bugsArray.map(({ color, type }) => (
            <div
              className="flex h-full w-2/6 flex-col items-center justify-center gap-2 rounded-lg"
              key={type}
            >
              <div className="text-2xl">{bugs[type]}</div>
              <div className={`text-xl ${color}`}>
                <BiSolidBugAlt />
              </div>
            </div>
          ))}
        </div>
        <div className="my-3 flex w-full justify-end">
          <Link
            to={`/user/orderLog`}
            className="text-light-point"
          >
            사용내역보기
          </Link>
        </div>
        <UserEtc />
      </div>
    </div>
  );
};

export default UserPage;

const badgeArray: ('오목눈이_탄생' | '어른_오목눈이' | '어른_부엉이')[] = [
  '오목눈이_탄생',
  '어른_오목눈이',
  '어른_부엉이'
];

const bugsArray: {
  type: 'morningBug' | 'nightBug' | 'goldenBug';
  color: string;
}[] = [
  {
    type: 'morningBug',
    color: 'text-light-point'
  },
  {
    type: 'nightBug',
    color: 'text-dark-point'
  },
  {
    type: 'goldenBug',
    color: 'text-warning'
  }
];
