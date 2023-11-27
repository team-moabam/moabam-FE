import { clsx } from 'clsx';
import { DayType } from '@/core/types';
import { useTheme } from '@/core/hooks';
import { Icon } from '@/shared/Icon';
import KeywordText from '@/RoomSearch/components/KeywordText';
import { useKeyword } from '@/RoomSearch';
import IconText from './IconText';

interface RoomSummaryProps {
  title: string;
  roomType: DayType;
  currentType?: DayType;
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  managerNickname?: string;
  isPassword?: boolean;
}

const birdByType = {
  MORNING: {
    containerBg: 'bg-yellow-50',
    imgStyle: 'relative left-[0.1rem] top-1 scale-[95%]',
    bird: 'Omok',
    imgSrc: (isAwake?: boolean) =>
      `/assets/skins/${isAwake ? 'awake' : 'sleep'}OmokSkin0.png`
  },
  NIGHT: {
    containerBg: 'bg-purple-50',
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
  managerNickname,
  isPassword
}: RoomSummaryProps) => {
  const certifyTimeToString = `${
    certifyTime < 10 ? `0${certifyTime}` : certifyTime
  } : 00`;
  const userCountToString = `${currentUserCount} / ${maxUserCount}`;
  const { theme } = useTheme();
  const currentType = theme === 'dark' ? 'NIGHT' : 'MORNING';
  const keyword = useKeyword();

  return (
    <div className="flex items-center gap-4">
      <div
        className={clsx(
          'relative h-12 w-12 shrink-0 overflow-hidden rounded-full',
          birdByType[roomType].containerBg
        )}
      >
        <img
          className={birdByType[roomType].imgStyle}
          src={birdByType[roomType].imgSrc(roomType === currentType)}
          alt={birdByType[roomType].bird}
        />
      </div>
      {isPassword && (
        <div
          className={clsx(
            'absolute h-6 w-6 rounded-full border-2 border-light-gray bg-dark-gray',
            'left-10 top-12 flex items-center  justify-center'
          )}
        >
          <Icon
            icon="MdLockOutline"
            color="white"
            className="mb-[0.05rem]"
          />
        </div>
      )}
      <div className="flex flex-col gap-[0.3rem]">
        <div className="line-clamp-2 font-IMHyemin-bold">
          {keyword ? (
            <KeywordText
              keyword={keyword}
              content={title}
              className="font-IMHyemin-bold"
            />
          ) : (
            title
          )}
        </div>
        <div className="flex flex-col gap-1 text-xs text-dark-gray">
          <IconText
            icon="LuAlarmClock"
            content={certifyTimeToString}
          />
          <div className="flex flex-wrap gap-1">
            <IconText
              icon="IoPeopleCircle"
              content={userCountToString}
            />
            {managerNickname && (
              <IconText
                icon="FaCrown"
                content={
                  <KeywordText
                    content={managerNickname}
                    keyword={keyword}
                  />
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSummary;
