import { ParticipatingRoom } from '@/core/types';
import getTimeRange from '@/core/utils/getTimeRange';

const calculateTimeDiff = (certifyTime: number, currentDate: Date) => {
  currentDate.setHours(0);
  const certifyDate = new Date(currentDate);
  certifyDate.setHours(certifyTime, 0, 0, 0);

  const timeDiff = certifyDate.getTime() - currentDate.getTime();

  return Math.abs(timeDiff);
};

const pickRoomToShow = (data: ParticipatingRoom[], today?: Date) => {
  const currentDate = today ?? new Date();
  const currentTimeRange = getTimeRange(currentDate);

  const result = data.sort((roomA, roomB) => {
    const roomADiff = calculateTimeDiff(roomA.certifyTime, currentDate);
    const roomBDiff = calculateTimeDiff(roomB.certifyTime, currentDate);
    if (roomADiff === roomBDiff) {
      if (roomA.roomType === currentTimeRange) return -1;
      return 1;
    }
    return roomADiff - roomBDiff;
  });

  return result[0];
};

export default pickRoomToShow;
