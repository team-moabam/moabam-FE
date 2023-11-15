import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/shared/Icon';

interface EventBannerProps {
  eventCount: number;
}

const EventBanner = ({ eventCount }: EventBannerProps) => {
  return (
    <div className="flex h-fit w-full items-center justify-between gap-5 bg-warning px-5 py-4">
      <div className="flex flex-wrap items-center gap-1 text-black">
        <div>선착순 쿠폰이</div>
        <div>
          <span className="mr-1 font-IMHyemin-bold text-white">
            {eventCount}
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
  );
};

export default EventBanner;
