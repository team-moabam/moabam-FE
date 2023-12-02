import { RoomInfo as RoomInfoType } from '@/core/types/Room';
import { ProgressBar } from '@/shared/ProgressBar';
import { LoadingSpinner } from '@/shared/LoadingSpinner';
import RoomMemberRank from './RoomMemberRank';

interface extendedProps {
  status: 'pending' | 'error' | 'success';
}
type RoomInfoProps = extendedProps & RoomInfoType;
const RoomInfo = ({
  level,
  todayCertificateRank,
  certifyTime,
  status,
  roomType,
  exp
}: RoomInfoProps) => {
  return (
    <div className="relative h-[20.56rem] overflow-hidden">
      {status !== 'success' ? (
        <div className="flex h-full w-full items-center justify-center">
          <LoadingSpinner size="2xl" />
        </div>
      ) : (
        <RoomMemberRank
          todayCertificateRank={todayCertificateRank}
          certifyTime={certifyTime}
          roomType={roomType}
        />
      )}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mb-2 flex items-center justify-between bg-inherit px-3.5">
          <span className="block h-[1.93rem] w-[4.62rem] rounded-[6.25rem] bg-light-point py-[0.16rem] text-center font-IMHyemin-bold text-light-main dark:bg-dark-point">
            Lv {level}
          </span>
          <div className="flex items-center font-IMHyemin-bold text-base text-light-gray">
            <span className="font-IMHyemin-bold">{exp}</span>
            <span
              className="flex font-IMHyemin-bold before:ml-[0.4rem] before:mr-[0.2rem] before:block 
           before:font-IMHyemin-bold before:text-base before:content-['/']"
            >
              10
            </span>
          </div>
        </div>
        <ProgressBar progress={(exp / 10) * 100}></ProgressBar>
      </div>
    </div>
  );
};

export default RoomInfo;
