import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import { Deffered } from '@/shared/Deffered';
import OrderLogList from '@/domain/OrderLogList/components/OrderLogList';
import OrderLogListFallback from '@/domain/OrderLogList/components/OrderLogListFallback';

const OrderLogPage = () => {
  return (
    <>
      <div className="h-full overflow-auto">
        <Header
          prev
          title="사용 내역"
          className="sticky top-0 bg-light-main dark:bg-dark-main"
        />
        <Suspense
          fallback={
            <Deffered>
              <OrderLogListFallback />
            </Deffered>
          }
        >
          <OrderLogList />
        </Suspense>
      </div>
    </>
  );
};

export default OrderLogPage;
