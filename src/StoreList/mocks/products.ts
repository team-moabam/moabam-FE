import { Product } from './types/product';

export const data: { products: Product[] } = {
  products: [
    {
      id: 1,
      type: 'BUG',
      name: 'X10',
      price: 3000,
      quantity: 10
    },
    {
      id: 2,
      type: 'BUG',
      name: 'X20',
      price: 3000,
      quantity: 20
    }
  ]
};
