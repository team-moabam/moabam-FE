import React from 'react';
import { clsx } from 'clsx';
import useToast from '@/shared/Toast/hooks/useToast';
import { COUPON_MAP } from '../coustants/CouponMap';
import DisabledCover from './DisabledCover';
import { CouponType } from '../mocks/types/couponType';

interface EventCardProps {
  couponId: number;
  name: string;
  couponType: CouponType;
  stock: number;
  point: number;
  description: string;
  dueType: 'onGoing' | 'notStarted' | 'ended';
  startDiff: number;
  endDiff: number;
}

const EventCard = ({
  couponId,
  name,
  couponType,
  stock,
  point,
  description,
  dueType,
  startDiff,
  endDiff
}: EventCardProps) => {
  const handleGetCoupon = (couponId: number) => {
    console.log(couponId, '요청');
    console.log('쿠폰 발급 완료!'); // TODO: 쿠폰 받기 onSuccess > 토스트
  };

  return (
    <div
      className={clsx(
        'relative flex w-full shrink-0 flex-col overflow-hidden',
        'rounded-xl bg-light-sub shadow-md dark:bg-dark-sub'
      )}
    >
      <div className="relative flex h-48">
        <img
          className="object-cover"
          src={COUPON_MAP[couponType].imgSrc}
        ></img>
        {dueType === 'onGoing' && (
          <div
            className={clsx(
              'absolute right-3 top-3 w-fit rounded-2xl px-2 py-1',
              'border border-light-gray text-xs text-light-gray',
              'bg-black bg-opacity-[0.4]'
            )}
          >
            {endDiff}일 뒤 종료
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 px-3 py-4">
        <div className="flex flex-col gap-1">
          <div className="font-IMHyemin-bold">
            {name}
            <span
              className={clsx(
                'ml-2 font-IMHyemin-bold',
                COUPON_MAP[couponType].textStyle
              )}
            >
              {COUPON_MAP[couponType].prefix}
            </span>{' '}
            {point}
            {COUPON_MAP[couponType].unit}
          </div>
          <div className="text-xs text-dark-gray">{description}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-dark-gray">{stock}개 남음</div>
          <div
            className={clsx(
              'cursor-pointer text-center font-IMHyemin-bold',
              'btn px-7 py-1 text-sm text-white',
              COUPON_MAP[couponType].bgStyle
            )}
            onClick={() => handleGetCoupon(couponId)}
          >
            쿠폰 받기
          </div>
        </div>
      </div>
      {dueType !== 'onGoing' && (
        <DisabledCover
          dueType={dueType}
          startDiff={startDiff}
        />
      )}
    </div>
  );
};

export default EventCard;
