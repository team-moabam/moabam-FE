import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import MyCouponList from '@/MyCouponList/components/MyCouponList';
import MyCouponFallback from '@/MyCouponList/components/MyCouponFallback';
const CouponPage = () => {
  return (
    <div className="h-full overflow-scroll">
      <Header
        prev="myPage"
        title="쿠폰함"
      />
      <Suspense fallback={<MyCouponFallback />}>
        <MyCouponList />
      </Suspense>
    </div>
  );
};

export default CouponPage;
