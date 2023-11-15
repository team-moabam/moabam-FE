import React from 'react';
import { clsx } from 'clsx';
import useToast from '@/shared/Toast/hooks/useToast';
import { Toast } from '@/shared/Toast';
import { CouponType } from '../mocks/types/couponType';

interface EventCardProps {
  couponId: number;
  name: string;
  couponType: CouponType;
  stock: number;
  endAt: string;
  point: number;
  description: string;
}

const EventCard = ({
  couponId,
  name,
  // couponType,
  stock,
  // endAt,
  // point,
  description
}: EventCardProps) => {
  const handleGetCoupon = (couponId: number) => {
    console.log(couponId, '요청');
    console.log('쿠폰 발급 완료!'); // TODO: 쿠폰 받기 onSuccess > 토스트
  };

  return (
    <div
      className={clsx(
        'flex w-full shrink-0 flex-col overflow-hidden',
        'rounded-xl bg-light-sub shadow-md dark:bg-dark-sub'
      )}
    >
      <div className="relative flex h-32 items-center justify-center bg-dark-gray p-3">
        <div
          className={clsx(
            'absolute right-3 top-3 w-fit rounded-2xl px-2 py-1',
            'border border-warning text-xs text-warning'
          )}
        >
          {stock}개 남음
        </div>
        <div className="flex items-center"></div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="font-IMHyemin-bold">{name}</div>
          <div className="text-xs text-dark-gray">3일 뒤 종료</div>
        </div>
        <div className="mb-5 text-xs text-dark-gray">{description}</div>
        <div
          className="btn btn-light-point dark:btn-dark-point cursor-pointer text-center font-IMHyemin-bold"
          onClick={() => handleGetCoupon(couponId)}
        >
          쿠폰 받기
        </div>
      </div>
    </div>
  );
};

export default EventCard;
