import { queryOptions } from '@tanstack/react-query';
import itemAPI from '../functions/itemAPI';

export const itemOptions = {
  all: (type: string) =>
    queryOptions({
      queryKey: ['item'] as const,
      queryFn: () => itemAPI.all(type)
    }),
  purchase: (itemId: string) =>
    queryOptions({
      queryKey: ['item', 'purchase', itemId] as const,
      queryFn: () => itemAPI.purchase(itemId)
    }),
  select: (itemId: string) =>
    queryOptions({
      queryKey: ['select', itemId] as const,
      queryFn: () => itemAPI.select(itemId)
    })
};

export default itemOptions;
