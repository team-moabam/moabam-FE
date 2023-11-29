import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Deffered } from '@/shared/Deffered';
import { Header } from '@/shared/Header';
import UserMain from '@/UserProfile/components/UserMain';
import UserEtc from '@/UserEtc/components/UserEtc';
import UserMainFallback from '@/UserProfile/components/UserMainFallback';

const UserPage = () => {
  const { userId } = useParams();

  return (
    <div className="relative h-full overflow-auto px-5 pb-5">
      <Header className="absolute left-0 top-0 z-10" />
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
