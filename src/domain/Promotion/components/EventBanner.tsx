import React from 'react';
import { Link } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';
import couponOptions from '@/core/api/options/coupon';

const EventBanner = () => {
  const { data } = useSuspenseQuery({
    ...couponOptions.filter('available'),
    select: (data): number => {
      return Object.values(data).length;
    }
  });

  return (
    data > 0 && (
      <Link
        to="/event"
        state={{ from: 'routines' }}
        className={clsx(
          'flex h-fit w-full items-center justify-between gap-4 p-5 ',
          'bg-gradient-to-l from-[#D2D68F] via-[#AEE6CF] to-[#60D4DE] shadow-nav'
        )}
      >
        <div className="flex flex-wrap items-center gap-1 text-white">
          <div className="break-keep font-IMHyemin-bold">
            진행 중인 이벤트가 있어요!
          </div>
        </div>
        <div className="flex cursor-pointer break-keep rounded-2xl bg-light-main px-6 py-1 text-sm text-black max-[336px]:px-4">
          보러가기
        </div>
      </Link>
    )
  );
};

export default EventBanner;
