import { baseInstance } from '../instance';
import { TodayBugs } from '@/core/types/TodayBugs';
import { BugHistoryType } from '@/core/types/BugHistory';
import { MyBugsType } from '@/core/types/MyBugs';

const bugAPI = {
  getTodayBugs: async () => {
    return await baseInstance.get<TodayBugs>('/bugs/today');
  },
  bugHistory: async () => {
    return await baseInstance.get<BugHistoryType>('/bugs/history');
  },
  myBug: async () => {
    return await baseInstance.get<MyBugsType>('/bugs');
  }
};

export default bugAPI;
