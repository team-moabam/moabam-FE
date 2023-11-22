import { useQuery, useSuspenseQueries } from '@tanstack/react-query';
import couponOptions from '@/core/api/options/coupon';
import { Coupons } from '@/core/types';
import timeOption from '@/core/api/options/time';
import getDateDiff from '../utils/getDateDiff';
import EventCard from './EventCard';

const dueTypes = ['opened', 'ended'] as const;

const EventList = () => {
  const { data: today } = useQuery(timeOption);
  const results = useSuspenseQueries({
    queries: [
      couponOptions.filter('opened'),
      {
        ...couponOptions.filter('ended'),
        select: (data: Coupons) => {
          return data.slice(0, 5);
        }
      }
    ]
  });

  return (
    <div className="flex h-full flex-col items-center gap-6 overflow-y-auto p-6 pt-2">
      {results.map(({ data }, resultIndex) =>
        data.map((coupon) => (
          <EventCard
            {...coupon}
            key={coupon.couponId}
            dueType={dueTypes[resultIndex]}
            startDiff={getDateDiff(
              (today || new Date()).toJSON(),
              coupon.startAt
            )}
          />
        ))
      )}
    </div>
  );
};

export default EventList;
