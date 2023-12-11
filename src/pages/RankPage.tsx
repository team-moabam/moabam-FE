import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import { Deffered } from '@/shared/Deffered';
import RankList from '@/domain/RankList/components/RankLIst';
import RankListFallback from '@/domain/RankList/components/RankListFallback';

const RankPage = () => {
  return (
    <div className="flex h-full w-full max-w-md flex-col">
      <Header
        prev
        className="bg-light-sub dark:bg-dark-sub"
        title="랭킹"
      />
      <Suspense
        fallback={
          <Deffered>
            <RankListFallback />
          </Deffered>
        }
      >
        <RankList />
      </Suspense>
    </div>
  );
};

export default RankPage;
