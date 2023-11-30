import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import RankList from '@/RankList/components/RankLIst';
const RankPage = () => {
  return (
    <div className="flex h-full w-full max-w-md flex-col">
      <Header
        prev="myPage"
        className="bg-light-sub dark:bg-dark-sub"
        title="랭킹"
      />
      <Suspense>
        <RankList />
      </Suspense>
    </div>
  );
};

export default RankPage;
