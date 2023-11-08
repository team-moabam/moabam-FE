import RoomMemberRank from './RoomMemberRank';
import { ProgressBar } from '@/shared/ProgressBar';
import { RoomInfo as RoomInfoType } from '@/core/types/Room';

type RoomInfoProps = {
  roomInfoData: Pick<
    RoomInfoType,
    'level' | 'currentUserCount' | 'maxUserCount' | 'todayCertificateRank'
  >;
};

const RoomInfo = ({ roomInfoData }: RoomInfoProps) => {
  const { level, currentUserCount, maxUserCount, todayCertificateRank } =
    roomInfoData;
  return (
    <div className="relative h-[20.56rem]">
      <RoomMemberRank todayCertificateRank={todayCertificateRank} />
      <div className="absolute inset-x-0 bottom-0">
        <div className="mb-[0.5rem] flex items-end justify-between bg-inherit pl-[0.87rem] pr-[1.75rem]">
          <span className="block h-[1.93rem] w-[4.62rem] rounded-[6.25rem] bg-light-point py-[0.16rem] text-center font-IMHyemin-bold text-light-main dark:bg-dark-point">
            Lv{level}
          </span>
          <div className="flex font-IMHyemin-bold text-[1rem] text-light-gray">
            <span className="font-IMHyemin-bold">{currentUserCount}</span>
            <span
              className="flex font-IMHyemin-bold before:mx-[0.4rem] before:block 
           before:font-IMHyemin-bold before:text-[1rem] before:content-['/']"
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
