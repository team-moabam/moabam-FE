import React from 'react';
import { coupons } from '@/Events/mocks/coupons';
import EventCard from '@/Events/components/EventCard';
import { Header } from '@/shared/Header';

const EventPage = () => {
  return (
    <div className="flex h-full flex-col">
      <Header
        prev="routines"
        title="이벤트"
      />
      <div className="flex h-full flex-col items-center gap-6 overflow-y-auto p-6 pt-2">
        {coupons.map((coupon) => (
          <EventCard
            key={coupon.couponId}
            {...coupon}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
