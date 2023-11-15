import React from 'react';
import { Link } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import couponOptions from '@/core/api/options/coupon';
import { Icon } from '@/shared/Icon';

const EventBanner = () => {
  const { data: couponCount } = useSuspenseQuery({
    ...couponOptions.all({
      couponOngoing: true,
      couponEnded: false,
      couponNotStarted: false
    }),
    select: ({ statusCode, ...coupons }): number => {
      return Object.values(coupons).length;
    }
  });

  return (
    couponCount > 0 && (
      <div className="flex h-fit w-full items-center justify-between gap-5 bg-warning px-5 py-4">
        <div className="flex flex-wrap items-center gap-1 text-black">
          <div>선착순 쿠폰이</div>
          <div>
            <span className="mr-1 font-IMHyemin-bold text-white">
              {couponCount}
            </span>
            장 남았어요!
          </div>
        </div>
        <Link
          to="/event"
          className="btn flex cursor-pointer break-keep bg-light-main text-black"
        >
          이벤트 보러가기
          <Icon
            icon="RiCoupon2Fill"
            size="lg"
            className="ml-2 mt-1 -rotate-45"
          />
        </Link>
      </div>
    )
  );
};

export default EventBanner;
