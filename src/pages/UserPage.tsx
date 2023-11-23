import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import UserMain from '@/UserProfile/components/UserMain';
import UserEtc from '@/UserEtc/components/UserEtc';
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
        {!userId && <UserEtc />}
      </Suspense>
    </div>
  );
};

export default UserPage;
