import React from 'react';
import { useSuspenseQueries } from '@tanstack/react-query';
import couponOptions from '@/core/api/options/coupon';
import { EventCard } from '..';
import getDateDiff from '../utils/getDateDiff';

const EventList = () => {
  const today = new Date().toJSON(); // TODO: 서버시간 API 연결
  const [{ data: onGoingData }, { data: notStartedData }, { data: endedData }] =
    useSuspenseQueries({
      queries: [
        couponOptions.onGoing(),
        couponOptions.notStarted(),
        couponOptions.ended()
      ]
    });

  return (
    <div className="flex h-full flex-col items-center gap-6 overflow-y-auto p-6 pt-2">
      {onGoingData.map((coupon) => (
        <EventCard
          {...coupon}
          key={coupon.couponId}
          dueType="onGoing"
          startDiff={getDateDiff(today, coupon.startAt)}
          endDiff={getDateDiff(today, coupon.endAt)}
        />
      ))}
      {notStartedData.map((coupon) => (
        <EventCard
          {...coupon}
          key={coupon.couponId}
          dueType="notStarted"
          startDiff={getDateDiff(today, coupon.startAt)}
          endDiff={getDateDiff(today, coupon.endAt)}
        />
      ))}
      {endedData.map((coupon) => (
        <EventCard
          {...coupon}
          key={coupon.couponId}
          dueType="ended"
          startDiff={getDateDiff(today, coupon.startAt)}
          endDiff={getDateDiff(today, coupon.endAt)}
        />
      ))}
    </div>
  );
};

export default EventList;
