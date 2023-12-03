import { useState, ChangeEvent, useRef } from 'react';
import { useSuspenseQueries, useMutation } from '@tanstack/react-query';
import { BiSolidBugAlt, BiChevronRight } from 'react-icons/bi';
import {
  loadPaymentWidget,
  PaymentWidgetInstance
} from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import { bugOptions, couponOptions } from '@/core/api/options';
import { ProductBug, MyCoupon, PurchaseRes } from '@/core/types';
import bugAPI from '@/core/api/functions/bugAPI';
import paymentAPI from '@/core/api/functions/payment';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';

const StoreList = () => {
  const [
    {
      data: { products }
    },
    { data: myCouponsResponse }
  ] = useSuspenseQueries({
    queries: [
      {
        ...bugOptions.productBugs()
      },
      {
        ...couponOptions.my(),
        select: (coupons: MyCoupon[]) =>
          coupons.filter(({ type }) => type === 'DISCOUNT')
      }
    ]
  });
  const mutation = useMutation({
    mutationFn: bugAPI.purchaseBugs
  });
  const { bottomSheetProps, open, close } = useBottomSheet();
  const [selectProduct, setSelectProduct] = useState<ProductBug>();
  const [selectCoupon, setSelectCoupon] = useState<MyCoupon>();
  const [isCheckoutMode, setIsCheckoutMode] = useState(false);
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const [purchaseRes, setPurchaseRes] = useState<PurchaseRes>();

  const handleOpenSheet = (product: ProductBug) => {
    open();
    setSelectProduct(product);
  };

  const handleSelectCoupon = (event: ChangeEvent<HTMLSelectElement>) => {
    const targetId = event.target.value;
    setSelectCoupon(
      myCouponsResponse.find(({ walletId }) => walletId.toString() === targetId)
    );
  };

  const handleWidget = () => {
    if (!selectProduct) return;
    mutation.mutate(
      {
        productId: selectProduct.id,
        couponWalletId: selectCoupon?.walletId
      },
      {
        onSuccess: async (data) => {
          setPurchaseRes(data);
          const paymentWidget = await loadPaymentWidget(
            import.meta.env.VITE_TOSS_CLIENT_KET,
            import.meta.env.VITE_TOSS_CUSTOMER_KEY
          );
          paymentWidget.renderPaymentMethods('#payment-widget', data.price);
          paymentWidgetRef.current = paymentWidget;
        }
      }
    );
    close();
    setIsCheckoutMode(true);
  };

  const handlePurchase = async () => {
    if (!purchaseRes) return;
    const orderId = nanoid();
    try {
      await paymentAPI.payment(purchaseRes.paymentId, { orderId });
      await paymentWidgetRef.current?.requestPayment({
        orderId,
        successUrl: `${window.location.origin}/purchase-success`,
        failUrl: `${window.location.origin}/purchase-fail`,
        ...purchaseRes
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ul className="flex flex-col gap-2 p-5">
        {products.map((product) => (
          <li
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-light-sub p-3 font-extrabold transition-all hover:bg-slate-100 dark:bg-dark-sub dark:hover:bg-[#0D122D]"
            key={product.id}
            onClick={() => handleOpenSheet(product)}
          >
            <div className="text-lg text-warning">
              <BiSolidBugAlt />
            </div>
            <h1 className="grow">{product.name}</h1>
            <div className="flex items-center gap-1 text-xl font-extrabold text-light-point dark:text-dark-point">
              <span>₩ </span>
              <h1>{product.price}</h1>
              <div className="text-3xl">
                <BiChevronRight />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <BottomSheet {...bottomSheetProps}>
        {selectProduct && (
          <div className="p-3">
            <h1 className="my-5 text-xl font-extrabold">
              {selectProduct.name} <br /> 상품을 구매하시겠어요?
            </h1>
            <h1 className="my-1 text-dark-gray">쿠폰</h1>
            <select
              className="w-full rounded-md border-2 p-1 dark:text-black"
              onChange={handleSelectCoupon}
              value={selectCoupon?.walletId ?? ''}
            >
              <option value="">선택안함</option>
              {myCouponsResponse.map(({ point, walletId }) => (
                <option
                  value={walletId}
                  key={walletId}
                >
                  {point}원 할인 쿠폰
                </option>
              ))}
            </select>
            <div className="mt-8 flex flex-col gap-2 text-dark-gray">
              <div className="flex">
                <h1 className="grow">상품가격</h1>
                <h1>{selectProduct.price} </h1>
              </div>
              <div className="flex">
                <h1 className="grow">할인</h1>
                <h1>{selectCoupon?.point}원</h1>
              </div>
              <hr />
              <div className="flex font-extrabold text-light-point dark:text-dark-point">
                <h1 className="grow">총 결제 금액</h1>
                <h1>{selectProduct.price - (selectCoupon?.point ?? 0)}</h1>
              </div>
              <button
                className="btn btn-light-point dark:btn-dark-point mt-2"
                onClick={handleWidget}
              >
                구매
              </button>
            </div>
          </div>
        )}
      </BottomSheet>
      {isCheckoutMode && (
        <div className="absolute top-0 z-50 h-full w-full">
          <div
            className="absolute h-full w-full bg-black opacity-50"
            onClick={() => setIsCheckoutMode(false)}
          />
          <div className="absolute top-1/2 w-full -translate-y-1/2 bg-white">
            <div>
              <div id="payment-widget" />
              <div className="w-full p-5">
                <button
                  className="btn btn-light-point w-full"
                  onClick={handlePurchase}
                >
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreList;
