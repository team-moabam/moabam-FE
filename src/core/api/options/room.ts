import { queryOptions } from '@tanstack/react-query';
import roomAPI from '../functions/roomAPI';

const roomOptions = {
  detail: (roomId: number) =>
    queryOptions({
      queryKey: ['rooms', 'detail', roomId] as const,
      queryFn: () => roomAPI.getRoomDetail(roomId),
      enabled: !isNaN(roomId)
    })
};

export default roomOptions;
