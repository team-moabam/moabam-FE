import React from 'react';
import { ErrorBoundary, ErrorBoundaryFallbackProps } from '@suspensive/react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

interface QueryErrorBoundaryProps {
  fallback:
    | React.ReactNode
    | React.FunctionComponent<ErrorBoundaryFallbackProps<Error>>;
}

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
