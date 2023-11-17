import React from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

const QueryErrorBoundary = ({ children }: React.PropsWithChildren) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallback={(props) => (
        <div>
          <div>재시도하세요!!</div>
          <button onClick={props.reset}>트라이 어게인</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default QueryErrorBoundary;
