import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import LogList from '@/LogList/components/LogList';
import LogListFallback from '@/LogList/components/LogListFallback';

const ParticipateLogPage = () => {
  return (
    <div className="h-full overflow-auto ">
      <Header
        prev="myPage"
        title="방 참여 기록"
        className="sticky top-0 bg-light-main dark:bg-dark-main"
      />
      <Suspense fallback={<LogListFallback />}>
        <LogList />
      </Suspense>
    </div>
  );
};

export default ParticipateLogPage;