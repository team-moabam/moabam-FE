import { Link } from 'react-router-dom';
import { useSuspenseQueries } from '@tanstack/react-query';
import { BiSolidBugAlt } from 'react-icons/bi';
import memberOptions from '@/core/api/options/member';
import { ProgressBar } from '@/shared/ProgressBar';
import UserProfile from './UserProfile';

interface UserMainProps {
  userId: string | undefined;
}

const UserMain = ({ userId = '' }: UserMainProps) => {
  const isMyPage = !userId;
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
        morningBug,
        nightBug,
        goldenBug
      }
    }
  ] = useSuspenseQueries({
    queries: [
      {
        ...(isMyPage
          ? memberOptions.myInfo()
          : memberOptions.memberInfo(userId))
      }
    ]
  });

  const WalletData = [
    {
      value: morningBug,
      color: 'text-light-point'
    },
    {
      value: nightBug,
      color: 'text-dark-point'
    },
    {
      value: goldenBug,
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
        {isMyPage && (
          <Link
            to="/mybird"
            className="cursor-pointer text-light-point dark:text-dark-point"
          >
            스킨 변경
          </Link>
        )}
      </div>
      <div className="flex w-full justify-center gap-4">
        <Link
          to={isMyPage ? '/mybird' : '#'}
          state={{ type: 'MORNING' }}
          className="flex aspect-[3/4] w-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-light-sub text-lg dark:bg-dark-sub"
        >
          <div className="aspect-square w-3/5  overflow-hidden rounded-full bg-yellow-50">
            <img
              src={birds.MORNING}
              className="object-cover p-4"
            />
          </div>
          <div>오목눈이</div>
        </Link>
        <Link
          to={isMyPage ? '/mybird' : '#'}
          state={{ type: 'NIGHT' }}
          className="flex aspect-[3/4] w-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-light-sub text-lg dark:bg-dark-sub"
        >
          <div className="aspect-square w-3/5 overflow-hidden rounded-full bg-purple-50">
            <img
              src={birds.NIGHT}
              className="object-cover p-4"
            />
          </div>
          <div>부엉이</div>
        </Link>
      </div>
      <div className="mb-3 mt-8 flex w-full justify-between">
        <h1>뱃지</h1>
      </div>
      <div className="flex h-36 w-full rounded-lg  text-sm">
        {badges.slice(0, 3).map(({ badge, unlock }) => (
          <div
            className="flex h-full w-2/6 flex-col items-center justify-center gap-2 rounded-lg"
            key={badge}
          >
            <div
              className={`h-16 w-16 rounded-full p-3 ${
                unlock ? 'bg-light-point dark:bg-dark-point' : 'bg-dark-gray'
              }`}
            >
              <img
                src={
                  unlock ? badgeImage[badge] ?? '' : '/assets/badge/lock.png'
                }
              />
            </div>
            <p className="text-center">{badge}</p>
          </div>
        ))}
      </div>
      {isMyPage && (
        <>
          <div className="mb-3 mt-8 flex w-full justify-between">
            <h1>
              그 외{' '}
              <span className="text-dark-gray">
                (다른사람들에게 공개되지 않아요)
              </span>
            </h1>
          </div>
          <Link
            className="flex h-28 w-full rounded-2xl bg-light-sub dark:bg-dark-sub"
            to={`/store`}
          >
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
          </Link>
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

const badgeImage: {
  [key: string]: string;
} = {
  '오목눈이 탄생': '/assets/badge/birthOmok.png',
  '부엉이 탄생': '/assets/badge/birthOmok.png',
  '어른 오목눈이': '/assets/badge/growOmok.png',
  '어른 부엉이': '/assets/badge/growOwl.png'
};
