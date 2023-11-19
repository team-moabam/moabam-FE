import { useErrorBoundaryFallbackProps } from '@suspensive/react';

const NetworkFallback = () => {
  const { reset } = useErrorBoundaryFallbackProps();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img
        src="/assets/PageError.png"
        alt="오류"
      />
      <h1 className="mt-5 text-3xl font-bold">오류 발생</h1>
      <p className="text-lg leading-10 text-dark-gray">
        정보를 불러올 수 없어요.
      </p>
      <button
        className="btn btn-light-point dark:btn-dark-point mt-5 flex w-32 items-center justify-center rounded-lg"
        onClick={reset}
      >
        다시 불러오기
      </button>
    </div>
  );
};

export default NetworkFallback;
