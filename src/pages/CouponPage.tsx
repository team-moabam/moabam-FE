import { Header } from '@/shared/Header';
import MyCouponList from '@/MyCouponList/components/MyCouponList';

const CouponPage = () => {
  return (
    <div className="h-full overflow-scroll">
      <Header
        prev="myPage"
        title="쿠폰함"
      />
      <MyCouponList />
    </div>
  );
};

export default CouponPage;
