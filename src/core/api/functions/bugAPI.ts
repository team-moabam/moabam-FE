import { baseInstance } from '../instance';
import { TodayBugs } from '@/core/types/TodayBugs';

const bugAPI = {
  getTodayBugs: async () => {
    return await baseInstance.get<TodayBugs>('/bugs/today');
  },
  bugHistory: async () => {
    return await baseInstance.get('/bugs/history');
  }
};

export default bugAPI;
