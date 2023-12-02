import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import paymentAPI from '@/core/api/functions/payment';

const PurchaseSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const requestData = {
    orderId: searchParams.get('orderId'),
    amount: searchParams.get('amount'),
    paymentKey: searchParams.get('paymentKey')
  };

  useEffect(() => {
    paymentAPI.Confirm(requestData);
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="aspect-square w-36">
        <img src="/assets/payment/success.png" />
      </div>
      <div className="my-5">
        <h1 className="mb-2 text-3xl font-semibold">결제 성공!</h1>
      </div>
      <Link
        to="/user"
        replace={true}
      >
        <button className="btn btn-light-point dark:btn-dark-point rounded-lg font-semibold">
          마이페이지로 이동
        </button>
      </Link>
    </div>
  );
};

export default PurchaseSuccessPage;
