import { ProgressBar } from '@/shared/ProgressBar';
import { RoomInfoType } from '@/core/types/Room';

type RoomInfoProps = {
  roomInfoData: Pick<
    RoomInfoType,
    'level' | 'currentUserCount' | 'maxUserCount'
  >;
};

const RoomInfo = ({ roomInfoData }: RoomInfoProps) => {
  const { level, currentUserCount, maxUserCount } = roomInfoData;
  return (
    <div className="relative h-[20.56rem]">
      <div className="absolute inset-x-0 bottom-0">
        <div className="mb-[0.5rem] flex items-end justify-between bg-inherit px-[0.87rem]">
          <span className="block h-[1.93rem] w-[4.62rem] rounded-[6.25rem] bg-light-point py-[0.16rem] text-center font-IMHyemin-bold text-light-main dark:bg-dark-point">
            Lv{level}
          </span>
          <span className="font-IMHyemin-bold text-dark-gray">
            {currentUserCount}/{maxUserCount}
          </span>
        </div>
        <ProgressBar progress={40}></ProgressBar>
      </div>
    </div>
  );
};

export default RoomInfo;
