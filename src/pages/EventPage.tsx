import React from 'react';
import { coupons } from '@/EventCard/components/mocks/coupons';
import EventCard from '@/EventCard/components/EventCard';
import { Header } from '@/shared/Header';

const EventPage = () => {
  return (
    <div className="flex h-full flex-col">
      <Header
        prev="routines"
        title="이벤트"
      />
      <div className="flex h-full flex-col gap-6 overflow-y-auto p-6 pt-2">
        {coupons.map((coupon) => (
          <EventCard {...coupon} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
