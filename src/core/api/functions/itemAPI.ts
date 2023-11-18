import { baseInstance } from '../instance';

const itemAPI = {
  all: async (type: string) => {
    return await baseInstance.get(`/items?type=${type}`);
  },
  purchase: async (itemId: string) => {
    return await baseInstance.post(`/items/${itemId}/purchase`);
  },
  select: async (itemId: string) => {
    return await baseInstance.post(`/items/${itemId}/select`);
  }
};

export default itemAPI;
