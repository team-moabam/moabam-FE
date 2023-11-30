import { baseInstance } from '../instance';

const rankAPI = {
  rank: async () => {
    return await baseInstance.get('/rankings');
  }
};

export default rankAPI;
