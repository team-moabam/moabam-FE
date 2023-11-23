import { Link } from 'react-router-dom';
import { useSuspenseQueries } from '@tanstack/react-query';
import { BiSolidBugAlt } from 'react-icons/bi';
import memberOptions from '@/core/api/options/member';
import UserProfile from './UserProfile';
import { ProgressBar } from '@/shared/ProgressBar';

interface UserMainProps {
  userId: string | undefined;
}

const UserMain = ({ userId = '' }: UserMainProps) => {
  const [
    {
      data: {
        nickname,
        intro,
        level,
        exp,
        birds,
        badges,
        profileImage,
        morning_bug,
        night_bug,
        golden_bug
      }
    }
  ] = useSuspenseQueries({
    queries: [
      {
        ...(userId ? memberOptions.memberInfo(userId) : memberOptions.myInfo())
      }
    ]
  });

  const WalletData = [
    {
      value: morning_bug ? morning_bug : 0,
      color: 'text-light-point'
    },
    {
      value: night_bug ? night_bug : 0,
      color: 'text-dark-point'
    },
    {
      value: golden_bug ? golden_bug : 0,
      color: 'text-warning'
    }
  ];

  return (
    <div className="relative pt-5">
      <UserProfile
        nickname={nickname}
        intro={intro}
        profileImage={profileImage}
        userId={userId}
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
        {badges.slice(0, 3).map(({ name, unlock }) => (
          <div
            className="flex h-full w-2/6 flex-col items-center justify-center gap-2 rounded-lg"
            key={name}
          >
            <div
              className={`h-14 w-14 rounded-full ${
                unlock ? 'bg-light-point dark:bg-dark-point' : 'bg-dark-gray'
              }`}
            />
            <p className="text-center">{name}</p>
          </div>
        ))}
      </div>
      {!userId && (
        <>
          <div className="mb-3 mt-8 flex w-full justify-between">
            <h1>
              그 외{' '}
              <span className="text-dark-gray">
                (다른사람들에게 공개되지 않아요)
              </span>
            </h1>
          </div>
          <div className="flex h-28 w-full rounded-2xl bg-light-sub dark:bg-dark-sub">
            {WalletData.map(({ value, color }) => (
              <div
                className="flex h-full w-2/6 flex-col items-center justify-center gap-3 rounded-lg"
                key={color}
              >
                <div className="text-2xl">{value}</div>
                <div className={`text-xl ${color}`}>
                  <BiSolidBugAlt />
                </div>
              </div>
            ))}
          </div>
          <div className="my-3 flex w-full justify-end">
            <Link
              to={`/user/order-log`}
              className="text-light-point dark:text-dark-point"
            >
              사용내역보기
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMain;
