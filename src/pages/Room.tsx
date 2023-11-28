import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import { Deffered } from '@/shared/Deffered';
import RoomNavigate from '@/RoomNavigate/components/RoomNavigate';
import RoomNavigateFallback from '@/RoomNavigate/components/RoomNavigateFallback';

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
