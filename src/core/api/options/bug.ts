import { queryOptions } from '@tanstack/react-query';
import bugAPI from '../functions/bugAPI';

const bugOptions = {
  today: () =>
    queryOptions({
      queryKey: ['bugs', 'today'] as const,
      queryFn: () => bugAPI.getTodayBugs()
    }),
  history: () =>
    queryOptions({
      queryKey: ['bugs', 'history'] as const,
      queryFn: () => bugAPI.bugHistory()
    })
};

export default bugOptions;
