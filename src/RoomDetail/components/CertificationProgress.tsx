import { useContext } from 'react';
import { ProgressBar } from '@/shared/ProgressBar';
import makeTodayCertifyTime from '../utils/makeTodayCertifyTime';
import { DateRoomDetailContext } from './RoomDetailProvider';

interface CertificationProgressProps {
  percentage: number;
  certifyTime: number;
}

const CertificationProgress = ({
  percentage,
  certifyTime
}: CertificationProgressProps) => {
  const { serverTime, chooseDate } = useContext(DateRoomDetailContext);
  const { nowTime, certificateTodayStartTime } = makeTodayCertifyTime(
    certifyTime,
    serverTime
  );
  const isTodayRoom = chooseDate.getDate() === serverTime.getDate();

  const chooseMonthText = chooseDate.getMonth() + 1;
  const chooseDateText = chooseDate.getDate();
  const certificateProgress =
    isTodayRoom && nowTime < certificateTodayStartTime ? 0 : percentage;

  return (
    <div className="mb-[0.75rem]">
      <div className="flex items-end  justify-between pb-2">
        <h4 className="text-base text-black dark:text-white">
          {isTodayRoom
            ? '오늘의 방 인증율'
            : `${chooseMonthText}월 ${chooseDateText}일 방 인증율`}
        </h4>
        <span className="text-2xl text-light-point dark:text-dark-point">
          {certificateProgress}%
        </span>
      </div>
      <ProgressBar
        progress={certificateProgress}
        className="rounded-full"
      />
    </div>
  );
};

export default CertificationProgress;
