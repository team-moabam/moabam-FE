import { queryOptions } from '@tanstack/react-query';
import bugAPI from '../functions/bugAPI';

const bugOptions = {
  history: () =>
    queryOptions({
      queryKey: ['bugs', 'history'] as const,
      queryFn: () => bugAPI.bugHistory()
    }),
  myBug: () =>
    queryOptions({
      queryKey: ['bugs', 'myBug'] as const,
      queryFn: () => bugAPI.myBug()
    }),
  productBugs: () =>
    queryOptions({
      queryKey: ['bugs', 'productBugs'] as const,
      queryFn: () => bugAPI.productBugs()
    })
};

export default bugOptions;
