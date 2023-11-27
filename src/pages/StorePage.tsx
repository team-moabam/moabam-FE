import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import StoreList from '@/StoreList/components/StoreList';

const StorePage = () => {
  return (
    <div className="relative h-full overflow-auto ">
      <Header
        prev="myPage"
        title="상점"
        className="sticky top-0 bg-light-main dark:bg-dark-main"
      />
      <Suspense>
        <StoreList />
      </Suspense>
    </div>
  );
};

export default StorePage;
