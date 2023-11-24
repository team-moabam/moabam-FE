import { queryOptions } from '@tanstack/react-query';
import timeAPI from '../functions/timeAPI';

const timeOption = queryOptions({
  queryKey: ['time'] as const,
  queryFn: () => timeAPI.getTime()
});

export default timeOption;
