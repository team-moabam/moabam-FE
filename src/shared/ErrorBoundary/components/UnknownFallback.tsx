import { Link } from 'react-router-dom';

const UnknownFallback = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img
        src="/assets/UnknownError.png"
        alt="오류"
      />
      <h1 className="mt-5 text-3xl font-bold">오류 발생</h1>
      <p className="text-lg leading-10 text-dark-gray">
        내부적인 문제로 오류가 발생했어요.
      </p>
      <Link
        className="btn btn-light-point dark:btn-dark-point mt-5 flex w-32 items-center justify-center rounded-lg"
        to={'/'}
      >
        홈으로
      </Link>
    </div>
  );
};

export default UnknownFallback;
