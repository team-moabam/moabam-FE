import { ItemsType } from '@/core/types';
import { baseInstance } from '../instance';

const itemAPI = {
  all: async (type: string) => {
    return await baseInstance.get<ItemsType>(`/items?type=${type}`);
  },
  purchase: async (data: { itemId: number; bugType: string }) => {
    return await baseInstance.post(
      `/items/${data.itemId}/purchase`,
      data.bugType
    );
  },
  select: async (itemId: number) => {
    return await baseInstance.post(`/items/${itemId}/select`);
  }
};

export default itemAPI;
