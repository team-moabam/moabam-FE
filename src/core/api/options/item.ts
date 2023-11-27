import { queryOptions } from '@tanstack/react-query';
import itemAPI from '../functions/itemAPI';

export const itemOptions = {
  all: (type: string) =>
    queryOptions({
      queryKey: ['item', type] as const,
      queryFn: () => itemAPI.all(type)
    })
};

export default itemOptions;
