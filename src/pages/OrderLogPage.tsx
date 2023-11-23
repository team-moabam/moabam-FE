import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import OrderLogList from '@/OrderLogList/components/OrderLogList';
import OrderLogFallback from '@/OrderLogList/components/OrderLogFallback';

const OrderLogPage = () => {
  return (
    <>
      <div className="h-full overflow-auto">
        <Header
          prev="myPage"
          title="구매 내역"
          className="sticky top-0 bg-light-main dark:bg-dark-main"
        />
        <Suspense fallback={<OrderLogFallback />}>
          <OrderLogList />
        </Suspense>
      </div>
    </>
  );
};

export default OrderLogPage;
