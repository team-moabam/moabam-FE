import RoomMemberRank from './RoomMemberRank';
import { ProgressBar } from '@/shared/ProgressBar';
import { RoomInfo as RoomInfoType } from '@/core/types/Room';

interface extendedProps {
  status: 'pending' | 'error' | 'success';
}
type RoomInfoProps = extendedProps & RoomInfoType;
const RoomInfo = ({
  level,
  currentUserCount,
  maxUserCount,
  todayCertificateRank,
  status
}: RoomInfoProps) => {
  return (
    <div className="relative h-[20.56rem]">
      {status !== 'success' ? (
        <div>임시 Loading...</div>
      ) : (
        <RoomMemberRank todayCertificateRank={todayCertificateRank} />
      )}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mb-2 flex items-end justify-between bg-inherit pl-3.5 pr-7">
          <span className="block h-[1.93rem] w-[4.62rem] rounded-[6.25rem] bg-light-point py-[0.16rem] text-center font-IMHyemin-bold text-light-main dark:bg-dark-point">
            Lv{level}
          </span>
          <div className="flex font-IMHyemin-bold text-base text-light-gray">
            <span className="font-IMHyemin-bold">{currentUserCount}</span>
            <span
              className="flex font-IMHyemin-bold before:mx-[0.4rem] before:block 
           before:font-IMHyemin-bold before:text-base before:content-['/']"
            >
              {maxUserCount}
            </span>
          </div>
        </div>
        <ProgressBar progress={40}></ProgressBar>
      </div>
    </div>
  );
};

export default RoomInfo;
