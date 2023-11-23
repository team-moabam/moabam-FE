import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import RoomNavigate from '@/RoomNavigate/components/RoomNavigate';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import RoomNavigateFallback from '@/RoomNavigate/components/RoomNavigateFallback';
import { Deffered } from '@/shared/Deffered';

const Room = () => {
  return (
    <ErrorBoundary fallback={<NetworkFallback />}>
      <Suspense
        fallback={
          <Deffered>
            <RoomNavigateFallback />
          </Deffered>
        }
      >
        <RoomNavigate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Room;
