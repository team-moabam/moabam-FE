import { Header } from '@/shared/Header';

const CouponPage = () => {
  return (
    <div className="h-full overflow-scroll">
      <Header
        prev="myPage"
        title="쿠폰함"
      />
      <div className="p-5">
        <div className="mb-5">쿠폰 (2개)</div>
        <ul>
          <li className="mb-2 flex rounded-lg bg-light-sub pr-0 shadow-lg dark:bg-dark-sub">
            <div className="flex-1 p-5">
              <p className="text-sm text-dark-gray">결제시</p>
              <h1 className="mb-5 mt-1 text-xl">밤벌레 5마리</h1>
              <p className="text-sm text-dark-gray">벌레를 돈주고 사다니</p>
            </div>
            <div className="grid place-content-center border-l border-dark-gray">
              <div className="rotate-90 text-dark-gray">coupon</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CouponPage;
