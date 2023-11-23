import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import RoomNavigate from '@/RoomNavigate/components/RoomNavigate';
import { NetworkFallback } from '@/shared/ErrorBoundary';

const Room = () => {
  return (
    <ErrorBoundary fallback={<NetworkFallback />}>
      <Suspense>
        <RoomNavigate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Room;
