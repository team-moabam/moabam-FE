import { useMutation } from '@tanstack/react-query';
import { clsx } from 'clsx';
import couponAPI from '@/core/api/functions/couponAPI';
import { COUPON_MAP } from '../coustants/couponInfo';
import DisabledCover from './DisabledCover';
import { Toast } from '@/shared/Toast';
import { CouponType } from '../mocks/types/couponType';

interface EventCardProps {
  couponId: number;
  name: string;
  couponType: CouponType;
  stock: number;
  point: number;
  description: string;
  dueType: 'opened' | 'closed';
  startDiff: number;
}

const EventCard = ({
  couponId, // TODO: 쿠폰 발급 요청을 위해 남겨둔건데, 쿠폰 이름으로 되있어서 확인 필요
  name,
  couponType,
  stock,
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
            Toast.show({ status: 'info', message: '쿠폰이 마감되었어요' });
            break;
          case 409:
            Toast.show({ status: 'info', message: '이미 발급된 쿠폰이에요' });
            break;
          default:
            Toast.show({ status: 'danger', message: '발급이 불가능합니다' });
        }
      }
    },
    onSuccess: () => {
      Toast.show({ status: 'confirm', message: '쿠폰 발급 완료!' });
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
          src={COUPON_MAP[couponType].imgSrc}
        ></img>
        {dueType === 'opened' && (
          <div
            className={clsx(
              'absolute right-3 top-3 w-fit rounded-2xl px-2 py-1',
              'border border-light-gray text-xs text-light-gray',
              'bg-black bg-opacity-[0.4]'
            )}
          >
            {stock}개 남음
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

        <div className="flex items-center justify-end">
          <div
            className={clsx(
              'cursor-pointer text-center font-IMHyemin-bold',
              'btn px-7 py-1 text-sm text-white',
              COUPON_MAP[couponType].bgStyle,
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
