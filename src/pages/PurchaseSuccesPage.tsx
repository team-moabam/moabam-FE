// import { Link, useSearchParams } from 'react-router-dom';

// const PurchaseSuccessPage = () => {
//   const [searchParams] = useSearchParams();
//   const Confirm = paymentAPI.Confirm({
//     paymentKey: searchParams.get('paymentKey') ?? '',
//     orderId: searchParams.get('orderId') ?? '',
//     amount: Number(searchParams.get('amount'))
//   });
//   console.log(Confirm);
//   return (
//     <div className="flex h-full flex-col items-center justify-center text-center ">
//       <div className="aspect-square w-36 ">
//         <img src="/assets/payment/success.png" />
//       </div>
//       <div className="my-5">
//         <h1 className="mb-2 text-3xl font-semibold">결제 성공!</h1>
//       </div>
//       <Link to={'/store'}>
//         <button className="btn btn-light-point dark:btn-dark-point rounded-lg font-semibold">
//           상점으로 돌아가기
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default PurchaseSuccessPage;

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
    async function confirm() {
      const response = await fetch(
        'https://api.tosspayments.com/v1/payments/confirm',
        {
          method: 'POST',
          headers: {
            Authorization: `Basic ${btoa(
              `${import.meta.env.VITE_TOSS_CUSTOMER_KEY}:`
            )}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        }
      );
      const json = await response.json();

      if (!response.ok) return;
      // TODO: 구매 완료 비즈니스 로직 구현
      console.log(json);
    }
    confirm();
    paymentAPI.Confirm(requestData);
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center text-center ">
      <div className="aspect-square w-36 ">
        <img src="/assets/payment/success.png" />
      </div>
      <div className="my-5">
        <h1 className="mb-2 text-3xl font-semibold">결제 성공!</h1>
      </div>
      <Link to={'/store'}>
        <button className="btn btn-light-point dark:btn-dark-point rounded-lg font-semibold">
          상점으로 돌아가기
        </button>
      </Link>
    </div>
  );
};

export default PurchaseSuccessPage;
