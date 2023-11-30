import { Ranking } from '@/core/types';
import { baseInstance } from '../instance';

const rankAPI = {
  rank: async () => {
    return await baseInstance.get<Ranking>('/rankings');
  }
};

export default rankAPI;
