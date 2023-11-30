export const COUPON_TOAST: {
  [key: string | number]: {
    status: string;
    message: string;
  };
} = {
  400: { status: 'info', message: '쿠폰이 마감되었어요' },
  409: { status: 'info', message: '이미 발급된 쿠폰이에요' },
  error: { status: 'danger', message: '발급이 불가능합니다' },
  success: { status: 'confirm', message: '쿠폰이 발급되었어요' }
};
