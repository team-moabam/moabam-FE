import { Suspense } from 'react';
import { Header } from '@/shared/Header';
import { EventList, EventListFallback } from '@/Promotion';
import { Deffered } from '@/shared/Deffered';

const EventPage = () => {
  return (
    <div className="flex h-full flex-col">
      <Header
        prev="routines"
        title="이벤트"
      />
      <Suspense
        fallback={
          <Deffered>
            <EventListFallback />
          </Deffered>
        }
      >
        <EventList />
      </Suspense>
    </div>
  );
};

export default EventPage;
