import { STORAGE_KEYS } from '@/core/constants/storageKeys';
import { ParticipatingRoom } from '@/core/types';
import getTimeRange from '@/core/utils/getTimeRange';

const calculateTimeDiff = (certifyTime: number, currentDate: Date) => {
  const certifyDate = new Date(currentDate);
  certifyDate.setHours(certifyTime, 0, 0, 0);

  const timeDiff = certifyDate.getTime() - currentDate.getTime();

  return Math.abs(timeDiff);
};

const pickRoom = (data: ParticipatingRoom[], today?: Date) => {
  const currentDate = today ?? new Date();
  const currentTimeRange = getTimeRange(currentDate);

  const certifyingRoom = data.find(
    ({ certifyTime }) =>
      calculateTimeDiff(certifyTime, currentDate) <= 20 * 60 * 1000
  )?.roomId;

  const latestRoom =
    sessionStorage.getItem(STORAGE_KEYS.VISITED_ROOM) ?? undefined;

  const closestRoom = data.sort((roomA, roomB) => {
    const roomADiff = calculateTimeDiff(roomA.certifyTime, currentDate);
    const roomBDiff = calculateTimeDiff(roomB.certifyTime, currentDate);
    if (roomADiff === roomBDiff) {
      if (roomA.roomType === currentTimeRange) return -1;
      return 1;
    }
    return roomADiff - roomBDiff;
  })[0]?.roomId;

  return {
    certifyingRoom,
    closestRoom,
    latestRoom
  };
};

export default pickRoom;
