import axios, { AxiosError } from 'axios';
import { baseInstance } from '../instance';

const roomAPI = {
  postRoom: async (body: {
    title: string;
    password: string;
    type: string;
    routine: string[];
    certifyTime: number;
    maxUserCount: number;
  }) => {
    return await baseInstance.post<{ message: string }>('/rooms', body);
  }
};

export default roomAPI;
