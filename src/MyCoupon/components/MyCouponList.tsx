import { useState } from 'react';
import {
  useSuspenseQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';
import couponAPI from '@/core/api/functions/couponAPI';
import { couponOptions } from '@/core/api/options';
import { MyCoupon } from '@/core/types';
import { Toast } from '@/shared/Toast';
import { useBottomSheet, BottomSheet } from '@/shared/BottomSheet';

const MyCouponList = () => {
  const mutation = useMutation({ mutationFn: couponAPI.useCoupon });
  const queryClient = useQueryClient();
  const [selectCoupon, setSelectCoupon] = useState<MyCoupon | null>(null);
  const { bottomSheetProps, open, close } = useBottomSheet();
  const { data } = useSuspenseQuery({
    ...couponOptions.my()
  });

  const handleUseCoupon = (
    walletId: number,
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
    mutation.mutate(walletId, {
      onSuccess: () => {
        Toast.show({
          message: `${bugType[type]}벌레 ${point}마리 획득!`,
          status: 'confirm'
        });
        queryClient.invalidateQueries({
          queryKey: couponOptions.my().queryKey
        });
        close();
      },
      onError: () => {
        Toast.show({
          message: '사용 실패..',
          status: 'danger'
        });
        close();
      }
    });
  };

  const handleSelectCoupon = (coupon: MyCoupon) => {
    setSelectCoupon(coupon);
    open();
  };

  if (!data)
    return (
      <div className="mt-5 text-center text-dark-gray">요청 오류입니다</div>
    );

  if (data.length === 0)
    return (
      <div className="mt-5 text-center text-dark-gray">쿠폰함이 비었습니다</div>
    );

  return (
    <>
      <div className="p-5">
        <div className="mb-5">쿠폰 ({data.length})</div>
        <ul>
          {data.map(
            ({ walletId, couponId, description, name, point, type }) => (
              <li
                className="mb-2 flex rounded-lg bg-light-sub pr-0 shadow-lg dark:bg-dark-sub"
                key={couponId}
                onClick={() =>
                  handleSelectCoupon({
                    walletId,
                    couponId,
                    description,
                    name,
                    point,
                    type
                  })
                }
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
            )
          )}
        </ul>
      </div>
      <BottomSheet {...bottomSheetProps}>
        {selectCoupon && (
          <div className="p-3">
            <h1 className="mb-10 mt-5 text-xl font-extrabold">
              {selectCoupon.type === 'DISCOUNT_COUPON'
                ? `${selectCoupon.point}원 결제 할인`
                : `${bugType[selectCoupon.type]}벌레 ${
                    selectCoupon.point
                  }마리`}{' '}
              쿠폰을 사용하시겠어요?
            </h1>
            <button
              className="btn btn-light-point dark:btn-dark-point w-full"
              onClick={() =>
                handleUseCoupon(
                  selectCoupon.walletId,
                  selectCoupon.point,
                  selectCoupon.type
                )
              }
            >
              사용하기
            </button>
          </div>
        )}
      </BottomSheet>
    </>
  );
};

export default MyCouponList;

const bugType = {
  MORNING_COUPON: '낮',
  NIGHT_COUPON: '밤',
  GOLDEN_COUPON: '황금'
};
