import { useMutation } from '@tanstack/react-query';
import { clsx } from 'clsx';
import couponAPI from '@/core/api/functions/couponAPI';
import { CouponType } from '@/core/types/Coupons';
import { Toast } from '@/shared/Toast';
import { COUPON_MAP } from '../coustants/couponInfo';
import DisabledCover from './DisabledCover';

interface EventCardProps {
  id: number;
  name: string;
  type: CouponType;
  maxCount: number;
  point: number;
  description: string;
  dueType: 'opened' | 'ended';
  startDiff: number;
}

const EventCard = ({
  id, // TODO: 쿠폰 발급 요청을 위해 남겨둔건데, 쿠폰 이름으로 되있어서 확인 필요
  name,
  type,
  maxCount,
  point,
  description,
  dueType,
  startDiff
}: EventCardProps) => {
  const couponAvailable = startDiff === 0 && dueType === 'opened';

  const { mutate, isPending } = useMutation({
    mutationFn: couponAPI.postCouponReceive,
    onError: ({ response }) => {
      if (response) {
        const { status } = response;
        switch (status) {
          case 400:
            Toast.show({
              status: 'info',
              message: '오늘의 이벤트가 아니에요!'
            });
            break;
          default:
            Toast.show({ status: 'danger', message: '발급이 불가능합니다' });
        }
      }
    },
    onSuccess: () => {
      Toast.show({
        status: 'confirm',
        message: '도전 완료! 결과를 기다려주세요'
      });
    }
  });

  const handleGetCoupon = (couponName: string) => {
    mutate({ couponName });
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
          {dueType === 'opened' && (
            <div
              className={clsx('w-fit rounded-2xl', 'text-xs text-light-gray')}
            >
              선착순 {maxCount}명
            </div>
          )}
          <div
            className={clsx(
              'cursor-pointer text-center font-IMHyemin-bold',
              'btn px-7 py-1 text-sm text-white',
              COUPON_MAP[type].bgStyle,
              { 'pointer-events-none': isPending }
            )}
            onClick={() => handleGetCoupon(name)}
          >
            쿠폰 받기
          </div>
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
