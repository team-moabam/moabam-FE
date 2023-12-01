import { useQuery, useSuspenseQueries } from '@tanstack/react-query';
import couponOptions from '@/core/api/options/coupon';
import { Coupons } from '@/core/types';
import timeOption from '@/core/api/options/time';
import getDateDiff from '../utils/getDateDiff';
import EventCard from './EventCard';

const dueTypes = ['opened', 'ended'] as const;

const EventList = () => {
  const { data: today } = useQuery(timeOption);
  const [{ data: myCoupons }, ...results] = useSuspenseQueries({
    queries: [
      couponOptions.my(),
      couponOptions.filter('opened'),
      {
        ...couponOptions.filter('ended'),
        select: (data: Coupons) => {
          return data.slice(0, 5);
        }
      }
    ]
  });

  const couponCount = results.reduce(
    (total, { data }) => total + data.length,
    0
  );

  return (
    <div className="flex h-full flex-col items-center gap-6 overflow-y-auto p-6 pt-2">
      {couponCount === 0 && (
        <div className="mt-10 opacity-50">아직 이벤트가 없어요!</div>
      )}
      {results.map(({ data }, resultIndex) =>
        data.map((coupon) => (
          <EventCard
            {...coupon}
            key={coupon.id}
            dueType={dueTypes[resultIndex]}
            startDiff={getDateDiff(
              (today || new Date()).toJSON(),
              coupon.startAt
            )}
            isOwn={myCoupons.some(({ id }) => id === coupon.id) ?? false}
          />
        ))
      )}
    </div>
  );
};

export default EventList;
