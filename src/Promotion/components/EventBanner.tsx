import React from 'react';
import { Link } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';
import couponOptions from '@/core/api/options/coupon';

const EventBanner = () => {
  const { data: couponCount } = useSuspenseQuery({
    ...couponOptions.onGoing(),
    select: (data): number => {
      return Object.values(data).length;
    }
  });

  return (
    couponCount > 0 && (
      <Link
        to="/event"
        className={clsx(
          'flex h-fit w-full items-center justify-between gap-5 p-5',
          'bg-gradient-to-l from-[#D2D68F] via-[#AEE6CF] to-[#60D4DE] shadow-nav'
        )}
      >
        <div className="flex flex-wrap items-center gap-1 text-white">
          <div>선착순 쿠폰이</div>
          <div>
            <span className="mr-1 font-IMHyemin-bold">{couponCount}</span>장
            남았어요!
          </div>
        </div>
        <div className="flex cursor-pointer break-keep rounded-2xl bg-light-main px-7 py-1 text-sm text-black">
          보러가기
        </div>
      </Link>
    )
  );
};

export default EventBanner;
