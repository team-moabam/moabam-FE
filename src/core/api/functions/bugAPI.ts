import { baseInstance } from '../instance';
import { TodayBugs } from '@/core/types/TodayBugs';

const bugAPI = {
  getTodayBugs: async () => {
    return await baseInstance.get<TodayBugs>('/bugs/today');
  }
};

export default bugAPI;
