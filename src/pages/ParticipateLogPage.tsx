import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import { Deffered } from '@/shared/Deffered';
import LogList from '@/LogList/components/LogList';
import LogListFallback from '@/LogList/components/LogListFallback';

const ParticipateLogPage = () => {
  return (
    <div className="h-full overflow-auto ">
      <Header
        prev={-1}
        title="방 참여 기록"
        className="sticky top-0 bg-light-main dark:bg-dark-main"
      />
      <Suspense
        fallback={
          <Deffered>
            <LogListFallback />
          </Deffered>
        }
      >
        <LogList />
      </Suspense>
    </div>
  );
};

export default ParticipateLogPage;
