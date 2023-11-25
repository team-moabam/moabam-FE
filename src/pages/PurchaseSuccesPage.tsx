import { Link, useSearchParams } from 'react-router-dom';
import paymentAPI from '@/core/api/functions/payment';

const PurchaseSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const Confirm = paymentAPI.Confirm({
    paymentKey: searchParams.get('paymentKey') ?? '',
    orderId: searchParams.get('orderId') ?? '',
    amount: Number(searchParams.get('amount'))
  });
  console.log(Confirm);
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

// import { Link, useSearchParams } from 'react-router-dom';
// // import paymentAPI from '@/core/api/functions/payment';

// const PurchaseSuccessPage = async () => {
//   const [searchParams] = useSearchParams();
//   // const Confirm = paymentAPI.Confirm({
//   //   paymentKey: searchParams.get('paymentKey') ?? '',
//   //   orderId: searchParams.get('orderId') ?? '',
//   //   amount: Number(searchParams.get('amount'))
//   // });
//   // console.log(Confirm);

//   const secretKey = import.meta.env.VITE_TOSS_CUSTOMER_KEY || '';
//   // const basicToken = Buffer.from(`${secretKey}:`, `utf-8`).toString('base64');
//   const basicToken = btoa(`${secretKey}:`);
//   const url = `https://api.tosspayments.com/v1/payments/orders/${searchParams.get(
//     'orderId'
//   )}`;
//   const payments = await fetch(url, {
//     headers: {
//       Authorization: `Basic ${basicToken}`,
//       'Content-Type': 'application/json'
//     }
//   }).then((res) => res.json());

//   const { card } = payments;

//   return (
//     <div className="flex h-full flex-col items-center justify-center text-center ">
//       <div className="aspect-square w-36 ">
//         <img src="/assets/payment/success.png" />
//       </div>
//       <div className="my-5">
//         <h1 className="mb-2 text-3xl font-semibold">결제 성공!</h1>
//         <h3>{card}</h3>
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
