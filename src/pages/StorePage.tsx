import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import { Deffered } from '@/shared/Deffered';
import StoreList from '@/StoreList/components/StoreList';
import StoreListFallback from '@/StoreList/components/StoreListFallback';
const StorePage = () => {
  return (
    <div className="relative h-full overflow-auto ">
      <Header
        prev
        title="상점"
        className="sticky top-0 bg-light-main dark:bg-dark-main"
      />
      <Suspense
        fallback={
          <Deffered>
            <StoreListFallback />
          </Deffered>
        }
      >
        <StoreList />
      </Suspense>
    </div>
  );
};

export default StorePage;
