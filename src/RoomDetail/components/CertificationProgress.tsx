import { ProgressBar } from '@/shared/ProgressBar';

interface CertificationProgressProps {
  percentage: number;
  chooseDate: Date;
  serverTime: Date;
}

const CertificationProgress = ({
  percentage,
  chooseDate,
  serverTime
}: CertificationProgressProps) => {
  return (
    <div className="mb-[0.75rem]">
      <div className="flex items-end  justify-between pb-2">
        <h4 className="text-base text-black dark:text-white">
          {chooseDate.getDate() === serverTime.getDate()
            ? '오늘의 방 인증율'
            : `${
                chooseDate.getMonth() + 1
              }월 ${chooseDate.getDate()}일 방 인증율`}
        </h4>
        <span className="text-2xl text-light-point dark:text-dark-point">
          {percentage}%
        </span>
      </div>
      <ProgressBar
        progress={percentage}
        className="rounded-full"
      />
    </div>
  );
};

export default CertificationProgress;
