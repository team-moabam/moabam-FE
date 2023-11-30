import { Items } from '@/core/types';
import { baseInstance } from '../instance';

const itemAPI = {
  all: async (type: string) => {
    return await baseInstance.get<Items>(`/items?type=${type}`);
  },
  purchase: async ({
    itemId,
    bugType
  }: {
    itemId: number;
    bugType: 'MORNING' | 'NIGHT' | 'GOLDEN';
  }) => {
    return await baseInstance.post(`/items/${itemId}/purchase`, { bugType });
  },
  select: async (itemId: number) => {
    return await baseInstance.post(`/items/${itemId}/select`);
  }
};

export default itemAPI;
