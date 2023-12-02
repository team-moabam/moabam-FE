import { Link } from 'react-router-dom';

const PurchaseFailPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center ">
      <div className="aspect-square w-36 ">
        <img src="/assets/payment/fail.png" />
      </div>
      <div className="my-5">
        <h1 className="mb-2 text-3xl font-semibold">결제 실패</h1>
        <h3 className="text-lg text-dark-gray">무언가 잘못 되었습니다..</h3>
      </div>
      <Link
        to="store"
        replace={true}
      >
        <button className="btn btn-light-point dark:btn-dark-point rounded-lg font-semibold">
          상점으로 돌아가기
        </button>
      </Link>
    </div>
  );
};

export default PurchaseFailPage;
