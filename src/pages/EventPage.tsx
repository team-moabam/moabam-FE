import React, { Suspense } from 'react';
import { Header } from '@/shared/Header';
import EventList from '@/Promotion/components/EventList';

const EventPage = () => {
  return (
    <div className="flex h-full flex-col">
      <Header
        prev="routines"
        title="이벤트"
      />
      <Suspense>
        <EventList />
      </Suspense>
    </div>
  );
};

export default EventPage;
