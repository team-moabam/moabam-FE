export interface MyCoupon {
  walletId: number;
  id: number;
  name: string;
  point: number;
  description: string;
  type: 'MORNING' | 'NIGHT' | 'GOLDEN' | 'DISCOUNT';
}
