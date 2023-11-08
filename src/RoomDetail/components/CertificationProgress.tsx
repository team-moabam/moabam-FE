import { ProgressBar } from '@/shared/ProgressBar';

interface CertificationProgressProps {
  percentage: number;
}

const CertificationProgress = ({ percentage }: CertificationProgressProps) => {
  return (
    <div className="mb-[2.13rem]">
      <div className="flex items-end  justify-between pb-2">
        <h4 className="text-base text-black dark:text-white">
          오늘의 방 인증율
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
