import { Report } from '@/core/types';
import { baseInstance } from '../instance';

const reportAPI = {
  report: async ({
    reportedId,
    memberId,
    roomId = null,
    certificationId = null,
    description = null
  }: Report) => {
    return await baseInstance.post<Report>(`/reports`, {
      reportedId,
      memberId,
      roomId,
      certificationId,
      description
    });
  }
};

export default reportAPI;
