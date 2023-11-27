import { Confirm } from '@/core/types';
import { baseInstance } from '../instance';

const paymentAPI = {
  payment: async (paymentId: string, body: { orderId: string }) => {
    return await baseInstance.post(`/payments/${paymentId}`, body);
  },
  Confirm: async (body: Confirm) => {
    return await baseInstance.post(`/payments/confirm`, body);
  }
};

export default paymentAPI;
