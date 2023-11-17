import React from 'react';
import { ErrorBoundary, ErrorBoundaryFallbackProps } from '@suspensive/react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

interface QueryErrorBoundaryProps {
  fallback:
    | React.ReactNode
    | React.FunctionComponent<ErrorBoundaryFallbackProps<Error>>;
}

/**
 * QueryErrorBoundary를 래핑한 ErrorBoundary 컴포넌트입니다.
 * 쿼리 에러가 발생했을 때, 쿼리를 리셋하는 함수를 담고 fallback을 렌더링합니다.
 * @param fallback - 오류 발생 시 렌더링할 컴포넌트.
 * @param children - 성공 시 렌더링할 컴포넌트.
 */
const QueryErrorBoundary = ({
  fallback,
  children
}: React.PropsWithChildren<QueryErrorBoundaryProps>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallback={fallback}
    >
      {children}
    </ErrorBoundary>
  );
};

export default QueryErrorBoundary;
