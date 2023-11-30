import { clsx } from 'clsx';
import { CouponType } from '@/core/types';
import { COUPON_MAP } from '../coustants/couponInfo';

interface CouponButtonProps {
  received: boolean;
  failed: boolean;
  type: CouponType;
  onClick: VoidFunction;
  isPending: boolean;
}

const getEventStatus = (received: boolean, failed: boolean) => {
  const eventStatus = {
    text: '쿠폰 받기',
    disable: false
  };
  if (failed) {
    eventStatus.text = '쿠폰 마감';
    eventStatus.disable = true;
  } else if (received) {
    eventStatus.text = '발급 완료';
    eventStatus.disable = true;
  }
  return eventStatus;
};

const CouponButton = ({
  received,
  failed,
  type,
  onClick,
  isPending
}: CouponButtonProps) => {
  const { text, disable } = getEventStatus(received, failed);
  const buttonStyle = disable ? 'btn-disabled' : COUPON_MAP[type].bgStyle;

  return (
    <div
      className={clsx(
        'cursor-pointer text-center font-IMHyemin-bold',
        'btn px-7 py-1 text-sm text-white',
        buttonStyle,
        { 'pointer-events-none': disable || isPending }
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default CouponButton;
