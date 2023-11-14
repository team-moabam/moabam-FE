import { queryOptions } from '@tanstack/react-query';
import bugAPI from '../functions/bugAPI';
import { DayType } from '@/core/types/Room';

const bugOptions = {
  today: () =>
    queryOptions({
      queryKey: ['bugs', 'today'] as const,
      queryFn: () => bugAPI.getTodayBugs()
      // select: ({ morningBug, nightBug }) =>
      //   dayType === 'MORNING' ? morningBug : nightBug
    })
};

export default bugOptions;
