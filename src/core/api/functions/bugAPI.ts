import { MyBugs } from '@/core/types';
import { BugHistory } from '@/core/types';
import { baseInstance } from '../instance';

const bugAPI = {
  bugHistory: async () => {
    return await baseInstance.get<BugHistory>('/bugs/history');
  },
  myBug: async () => {
    return await baseInstance.get<MyBugs>('/bugs');
  }
};

export default bugAPI;
