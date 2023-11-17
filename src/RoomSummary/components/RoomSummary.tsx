import { clsx } from 'clsx';
import { DayType } from '@/core/types';
import { useTheme } from '@/core/hooks';
import IconText from './IconText';

interface RoomSummaryProps {
  title: string;
  roomType: DayType;
  currentType?: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  managerNickname?: string;
}

const birdByType = {
  MORNING: {
    containerBg: 'bg-[#F9F8CA]',
    imgStyle: 'relative left-[0.1rem] top-1 scale-[95%]',
    bird: 'Omok',
    imgSrc: (isAwake?: boolean) =>
      `/assets/skins/${isAwake ? 'awake' : 'sleep'}OmokSkin0.png`
  },
  NIGHT: {
    containerBg: 'bg-[#FFF5E9]',
    imgStyle: 'relative scale-[85%] top-1',
    bird: 'Owl',
    imgSrc: (isAwake?: boolean) =>
      `/assets/skins/${isAwake ? 'awake' : 'sleep'}OwlSkin0.png`
  }
};

const RoomSummary = ({
  title,
  certifyTime,
  currentUserCount,
  maxUserCount,
  roomType,
  managerNickname
}: RoomSummaryProps) => {
  const certifyTimeToString = `${
    certifyTime < 10 ? `0${certifyTime}` : certifyTime
  } : 00`;
  const userCountToString = `${currentUserCount} / ${maxUserCount}`;
  const { theme } = useTheme();
  const currentType = theme === 'dark' ? 'NIGHT' : 'MORNING';

  return (
    <div className="flex items-center gap-4">
      <div
        className={clsx(
          'h-12 w-12 shrink-0 overflow-hidden rounded-full',
          birdByType[roomType].containerBg
        )}
      >
        <img
          className={birdByType[roomType].imgStyle}
          src={birdByType[roomType].imgSrc(roomType === currentType)}
          alt={birdByType[roomType].bird}
        />
      </div>
      <div className="flex flex-col gap-[0.3rem]">
        <div className="line-clamp-2 font-IMHyemin-bold">{title}</div>
        <div className="flex flex-col gap-1 text-xs text-dark-gray">
          <IconText
            icon="LuAlarmClock"
            text={certifyTimeToString}
          />
          <div className="flex flex-wrap gap-1">
            <IconText
              icon="IoPeopleCircle"
              text={userCountToString}
            />
            {managerNickname && (
              <IconText
                icon="FaCrown"
                text={managerNickname}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSummary;
