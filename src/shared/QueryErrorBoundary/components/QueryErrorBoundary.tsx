import React from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

const QueryErrorBoundary = ({ children }: React.PropsWithChildren) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallback={(props) => (
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
            className="btn btn-light-point dark:btn-dark-point mt-5 rounded-lg"
            onClick={props.reset}
          >
            다시 불러오기
          </button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default QueryErrorBoundary;
