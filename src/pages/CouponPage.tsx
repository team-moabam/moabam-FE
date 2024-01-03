import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import { Deffered } from '@/shared/Deffered';
import MyCouponList from '@/domain/MyCoupon/components/MyCouponList';
import MyCouponListFallback from '@/domain/MyCoupon/components/MyCouponListFallback';

const CouponPage = () => {
  return (
    <div className="h-full overflow-auto">
      <Header
        prev
        title="쿠폰함"
      />
      <Suspense
        fallback={
          <Deffered>
            <MyCouponListFallback />
          </Deffered>
        }
      >
        <MyCouponList />
      </Suspense>
    </div>
  );
};

export default CouponPage;
