export interface BugHistory {
  history: {
    id: number;
    bugType: 'MORNING_BUG' | 'NIGHT_BUG' | 'GOLDEN_BUG';
    action: '보상' | '쿠폰' | '충전';
    amount: number;
    date: string;
    paymentInfo?: {
      id: number;
      count: number;
      price: number;
      discount: number;
      provider: string;
    };
  }[];
}
