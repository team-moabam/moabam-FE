import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import MyCouponList from '@/MyCoupon/components/MyCouponList';
import MyCouponListFallback from '@/MyCoupon/components/MyCouponListFallback';

const CouponPage = () => {
  return (
    <div className="h-full overflow-scroll">
      <Header
        prev="myPage"
        title="쿠폰함"
      />
      <Suspense fallback={<MyCouponListFallback />}>
        <MyCouponList />
      </Suspense>
    </div>
  );
};

export default CouponPage;
