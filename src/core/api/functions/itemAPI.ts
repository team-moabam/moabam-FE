import { baseInstance } from '../instance';

const itemAPI = {
  all: async (type: string) => {
    return await baseInstance.get(`/items?type=${type}`);
  },
  purchase: async (data: { itemId: string; bugType: string }) => {
    return await baseInstance.post(
      `/items/${data.itemId}/purchase`,
      data.bugType
    );
  },
  select: async (itemId: string) => {
    return await baseInstance.post(`/items/${itemId}/select`);
  }
};

export default itemAPI;
