import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UserMain from '@/UserProfile/components/UserMain';
import UserEtc from '@/UserEtc/components/UserEtc';
import UserBugs from '@/UserBugs/components/UserBugs';
import { Deffered } from '@/shared/Deffered';
import UserMainFallback from '@/UserProfile/components/UserMainFallback';

const UserPage = () => {
  const { userId } = useParams();

  return (
    <div className="h-full overflow-auto px-5 pb-5">
      <Suspense
        fallback={
          <Deffered>
            <UserMainFallback />
          </Deffered>
        }
      >
        <UserMain userId={userId} />
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
            <Suspense>
              <UserBugs />
            </Suspense>
            <div className="my-3 flex w-full justify-end">
              <Link
                to={`/user/orderLog`}
                className="text-light-point dark:text-dark-point"
              >
                사용내역보기
              </Link>
            </div>
            <UserEtc />
          </>
        )}
      </Suspense>
    </div>
  );
};

export default UserPage;
