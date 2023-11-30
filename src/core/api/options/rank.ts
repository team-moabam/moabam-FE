import { queryOptions } from '@tanstack/react-query';
import rankAPI from '../functions/rank';

const rankOptions = {
  rank: () =>
    queryOptions({
      queryKey: ['rank'] as const,
      queryFn: () => rankAPI.rank()
    })
};

export default rankOptions;
