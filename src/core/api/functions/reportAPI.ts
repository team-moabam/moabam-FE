import { Report } from '@/core/types';
import { baseInstance } from '../instance';

const reportAPI = {
  report: async (body: Report) => {
    return await baseInstance.post<Report>(`/reports`, body);
  }
};

export default reportAPI;
