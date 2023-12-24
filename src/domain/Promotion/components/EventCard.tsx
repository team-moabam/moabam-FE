import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { clsx } from 'clsx';
import couponAPI from '@/core/api/functions/couponAPI';
import { CouponType } from '@/core/types';
import { Toast } from '@/shared/Toast';
import { COUPON_MAP } from '../coustants/couponInfo';
import { COUPON_TOAST } from '../coustants/couponToast';
import DisabledCover from './DisabledCover';
import CouponButton from './CouponButton';

interface EventCardProps {
  name: string;
  type: CouponType;
  maxCount: number;
  point: number;
  description: string;
  dueType: 'opened' | 'ended';
  startDiff: number;
}

const EventCard = ({
  name,
  type,
  maxCount,
  point,
  description,
  dueType,
  startDiff
}: EventCardProps) => {
  const couponAvailable = startDiff === 0 && dueType === 'opened';
  const [received, setReceived] = useState(false);
  const [failed, setFailed] = useState(dueType === 'ended');

  const { mutate, isPending } = useMutation({
    mutationFn: couponAPI.postCouponReceive,
    onError: ({ response }) => {
      if (response) {
        const { status } = response;
        if (status === 400 || status === 409) {
          Toast.show(COUPON_TOAST[status]);
          setFailed(status === 400);
          setReceived(status === 409);
        } else {
          status !== 401 && Toast.show(COUPON_TOAST.error);
          setFailed(true);
        }
      }
    },
    onSuccess: () => {
      Toast.show(COUPON_TOAST.success);
      setReceived(true);
    }
  });

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
          src={COUPON_MAP[type].imgSrc}
        ></img>
      </div>

      <div className="flex flex-col gap-3 px-3 py-4">
        <div className="flex flex-col gap-1">
          <div className="font-IMHyemin-bold">
            {name}
            <span
              className={clsx(
                'ml-2 font-IMHyemin-bold',
                COUPON_MAP[type].textStyle
              )}
            >
              {COUPON_MAP[type].prefix}
            </span>{' '}
            {point}
            {COUPON_MAP[type].unit}
          </div>
          <div className="text-xs text-dark-gray">{description}</div>
        </div>

        <div className="flex items-end justify-between">
          <div className="w-fit rounded-2xl text-xs">선착순 {maxCount}명</div>
          <CouponButton
            onClick={() => mutate({ couponName: name })}
            received={received}
            failed={failed}
            type={type}
            isPending={isPending}
          />
        </div>
      </div>
      {!couponAvailable && (
        <DisabledCover
          dueType={dueType}
          startDiff={startDiff}
        />
      )}
    </div>
  );
};

export default EventCard;
