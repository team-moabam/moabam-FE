import { queryOptions } from '@tanstack/react-query';
import roomAPI from '../functions/roomAPI';

const roomOptions = {
  detail: (roomId: string) =>
    queryOptions({
      queryKey: ['rooms', 'detail', roomId] as const,
      queryFn: () => roomAPI.getRoomDetail(roomId)
    })
};

export default roomOptions;
