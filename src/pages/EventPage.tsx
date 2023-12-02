import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { Header } from '@/shared/Header';
import { Deffered } from '@/shared/Deffered';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import { EventList, EventListFallback } from '@/Promotion';

const EventPage = () => {
  return (
    <div className="flex h-full flex-col">
      <Header
        prev
        title="이벤트"
      />
      <ErrorBoundary fallback={<NetworkFallback />}>
        <Suspense
          fallback={
            <Deffered>
              <EventListFallback />
            </Deffered>
          }
        >
          <EventList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default EventPage;
