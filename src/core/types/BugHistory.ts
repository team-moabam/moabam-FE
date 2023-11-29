export interface BugHistory {
  history: {
    id: number;
    bugType: 'MORNING' | 'NIGHT' | 'GOLDEN';
    actionType: 'USE' | 'REWARD' | 'CHARGE' | 'COUPON';
    quantity: number;
    date: string;
    paymentInfo?: {
      id: number;
      orderName: string;
      discountAmount: number;
      totalAmount: number;
    };
  }[];
}
