import { useEffect, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  loadPaymentWidget,
  PaymentWidgetInstance
} from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import bugAPI from '@/core/api/functions/bugAPI';
import { PurchaseRes } from '@/core/types';

const selector = '#payment-widget';
const clientKey = 'test_ck_AQ92ymxN34Lm4wxYbmgv3ajRKXvd';
const customerKey = 'test_sk_mBZ1gQ4YVXgoPdkvamMX3l2KPoqN';

interface CheckoutProps {
  setIsCheckoutMode: React.Dispatch<React.SetStateAction<boolean>>;
  purchaseRes: PurchaseRes;
}

export function Checkout({
  setIsCheckoutMode,
  purchaseRes: { paymentId, orderName, price }
}: CheckoutProps) {
  const mutation = useMutation({
    mutationFn: bugAPI.purchaseBugs
  });
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance['renderPaymentMethods']
  > | null>(null);
  console.log({ paymentId, orderName, price });
  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(
        import.meta.env.VITE_TOSS_CLIENT_KET,
        import.meta.env.VITE_TOSS_CUSTOMER_KEY
      );

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        selector,
        { value: price },
        { variantKey: 'DEFAULT' }
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  const handlePurchase = async () => {
    // mutation.mutate({
    //   productId,
    //   couponWalletId
    // });
    // [POST] ~/bugs/products/{productId}/purchase

    // 뭔가 오면

    // [POST] ~/payments/{paymentId}

    // 이 후 아이디는 내가 직접 생성해서

    // const res = await paymentWidget?.requestPayment({
    //                     orderId: nanoid(),
    //                     orderName: '토스 티셔츠 외 2건',
    //                     customerName: '김토스',
    //                     customerEmail: 'customer123@gmail.com',
    //                     successUrl: `${window.location.origin}/textProductResultPage`,
    //                     failUrl: `${window.location.origin}/`
    //                   });
    // 보내기

    const paymentWidget = paymentWidgetRef.current;

    try {
      const res = await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: '토스 티셔츠 외 2건',
        customerName: '김토스',
        customerEmail: 'customer123@gmail.com',
        successUrl: `${window.location.origin}/textProductResultPage`,
        failUrl: `${window.location.origin}/`
      });
      console.log(res);
    } catch (error) {
      // handle error
    }
  };

  return (
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
  );
}
