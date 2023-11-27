import { queryOptions } from '@tanstack/react-query';
import paymentAPI from '../functions/payment';

const paymentOptions = {
  payment: (paymentId: string, body: { orderId: string }) =>
    queryOptions({
      queryKey: ['payment'] as const,
      queryFn: () => paymentAPI.payment(paymentId, body)
    })
};

export default paymentOptions;
