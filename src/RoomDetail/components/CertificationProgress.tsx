import { useContext } from 'react';
import makeCertifyTime from '../utils/makeCertifyTime';
import { DateRoomDetailContext } from './RoomDetailProvider';
import { ProgressBar } from '@/shared/ProgressBar';

interface CertificationProgressProps {
  percentage: number;
  chooseDate: Date;
  certifyTime: number;
}

const CertificationProgress = ({
  percentage,
  chooseDate,
  certifyTime
}: CertificationProgressProps) => {
  const { serverTime } = useContext(DateRoomDetailContext);
  const isTodayRoom = chooseDate.getDate() === serverTime.getDate();
  const { nowTime, certificateStartTime } = makeCertifyTime(
    certifyTime,
    serverTime
  );

  const chooseMonthText = chooseDate.getMonth() + 1;
  const chooseDateText = chooseDate.getDate();
  const certificateProgress =
    isTodayRoom && nowTime < certificateStartTime ? 0 : percentage;

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
