import {
  useSuspenseQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';
import couponAPI from '@/core/api/functions/couponAPI';
import { couponOptions } from '@/core/api/options';
import { Toast } from '@/shared/Toast';

const MyCouponList = () => {
  const mutation = useMutation({ mutationFn: couponAPI.useCoupon });
  const queryClient = useQueryClient();
  const { data } = useSuspenseQuery({
    ...couponOptions.my()
  });

  const handleUseCoupon = (
    couponId: number,
    point: number,
    type:
      | 'MORNING_COUPON'
      | 'NIGHT_COUPON'
      | 'GOLDEN_COUPON'
      | 'DISCOUNT_COUPON'
  ) => {
    if (type === 'DISCOUNT_COUPON') {
      Toast.show({
        message: '할인 쿠폰은 결제시 사용 가능해요',
        status: 'danger'
      });
      return;
    }
    mutation.mutate(couponId, {
      onSuccess: () => {
        Toast.show({
          message: `${bugType[type]}벌레 ${point}마리 획득!`,
          status: 'confirm'
        });
        queryClient.invalidateQueries({
          queryKey: couponOptions.my().queryKey
        });
      },
      onError: () => {
        Toast.show({
          message: '사용 실패..',
          status: 'danger'
        });
      }
    });
  };

  return (
    <div className="p-5">
      <div className="mb-5">쿠폰 ({data.length})</div>
      <ul>
        {data &&
          data.map(({ couponId, description, name, point, type }) => (
            <li
              className="mb-2 flex rounded-lg bg-light-sub pr-0 shadow-lg dark:bg-dark-sub"
              key={couponId}
              onClick={() => handleUseCoupon(couponId, point, type)}
            >
              <div className="flex-1 p-5">
                <p className="text-sm text-dark-gray">{description}</p>
                <h1 className="mb-5 mt-1 text-xl">
                  {type === 'DISCOUNT_COUPON'
                    ? `${point}원 결제 할인`
                    : `${bugType[type]}벌레 ${point}마리`}
                </h1>
                <p className="text-sm text-dark-gray">{name}</p>
              </div>
              <div className="grid place-content-center border-l border-dark-gray">
                <div className="rotate-90 text-dark-gray">coupon</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MyCouponList;

const bugType = {
  MORNING_COUPON: '낮',
  NIGHT_COUPON: '밤',
  GOLDEN_COUPON: '황금'
};
