import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { useLocation } from 'react-router-dom';
import { Header } from '@/shared/Header';
import { EventList, EventListFallback } from '@/Promotion';
import { Deffered } from '@/shared/Deffered';
import { NetworkFallback } from '@/shared/ErrorBoundary';

const EventPage = () => {
  const { state } = useLocation();
  const prevPage = state ? 'routines' : 'myPage';

  return (
    <div className="flex h-full flex-col">
      <Header
        prev={prevPage}
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
