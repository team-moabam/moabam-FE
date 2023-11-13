import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserProfile from '@/UserProfile/components/UserProfile';
import UserEtc from '@/UserEtc/components/UserEtc';
import UserBugs from '@/UserBugs/components/UserBugs';

const UserPage = () => {
  const { pathname } = useLocation();
  const userParamsId = pathname.split('/')[2];

  return (
    <div className="h-screen overflow-scroll px-5 pb-20">
      <UserProfile />
      {userParamsId && (
        <>
          <div className="mb-3 mt-8 flex w-full justify-between">
            <div>
              그 외{' '}
              <span className="text-dark-gray">
                (다른사람들에게 공개되지 않아요)
              </span>
            </div>
          </div>
          <UserBugs />
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
    </div>
  );
};

export default UserPage;
