import { baseInstance } from '../instance';

const timeAPI = {
  getTime: async () => {
    const today = await baseInstance.get('/serverTime');
    return new Date(today);
  }
};

export default timeAPI;
