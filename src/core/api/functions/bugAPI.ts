import { MyBugs } from '@/core/types';
import { BugHistory } from '@/core/types';
import { ProductBugs } from '@/core/types';
import { baseInstance } from '../instance';

const bugAPI = {
  bugHistory: async () => {
    return await baseInstance.get<BugHistory>('/bugs/history');
  },
  myBug: async () => {
    return await baseInstance.get<MyBugs>('/bugs');
  },
  productBugs: async () => {
    return await baseInstance.get<ProductBugs>('/bugs/products');
  }
};

export default bugAPI;
