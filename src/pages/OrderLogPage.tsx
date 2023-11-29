import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import OrderLogList from '@/OrderLogList/components/OrderLogList';
import OrderLogListFallback from '@/OrderLogList/components/OrderLogListFallback';

const OrderLogPage = () => {
  return (
    <>
      <div className="h-full overflow-auto">
        <Header
          prev="myPage"
          title="사용 내역"
          className="sticky top-0 bg-light-main dark:bg-dark-main"
        />
        <Suspense fallback={<OrderLogListFallback />}>
          <OrderLogList />
        </Suspense>
      </div>
    </>
  );
};

export default OrderLogPage;
