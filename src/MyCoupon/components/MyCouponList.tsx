import { useSuspenseQuery } from '@tanstack/react-query';
import couponOptions from '@/core/api/options/coupon';

const MyCouponList = () => {
  const {
    data: { myCouponsResponse }
  } = useSuspenseQuery({ ...couponOptions.my() });

  return (
    <div className="p-5">
      <div className="mb-5">쿠폰 ({myCouponsResponse.length})</div>
      <ul>
        {myCouponsResponse.map(
          ({ couponId, description, name, point, type }) => (
            <li
              className="mb-2 flex rounded-lg bg-light-sub pr-0 shadow-lg dark:bg-dark-sub"
              key={couponId}
            >
              <div className="flex-1 p-5">
                <p className="text-sm text-dark-gray">{description}</p>
                <h1 className="mb-5 mt-1 text-xl">
                  {bugType[type]}벌레 {point}마리
                </h1>
                <p className="text-sm text-dark-gray">{name}</p>
              </div>
              <div className="grid place-content-center border-l border-dark-gray">
                <div className="rotate-90 text-dark-gray">coupon</div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MyCouponList;

const bugType = {
  MORNING_COUPON: '낮',
  NIGHT_COUPON: '밤',
  GOLDEN_COUPON: '황금'
};
