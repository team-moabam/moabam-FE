import IconText from './IconText';

interface RoomSummaryProps {
  title: string;
  type: 'MORNING' | 'NIGHT';
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  managerNickname?: string;
}

const birdByType = {
  // 임시입니다 mockData 아닙니다!
  MORNING: {
    containerStyle: 'h-12 w-12 rounded-full overflow-hidden shrink-0',
    imgStyle: '',
    bird: '오목눈이',
    imgSrc: 'https://i.ibb.co/QkqCq9J/image-107.png'
  },
  NIGHT: {
    containerStyle:
      'relative h-12 w-12 rounded-full bg-[#FFF5E9] overflow-hidden shrink-0',
    imgStyle: 'absolute left-1 top-1',
    bird: '부엉이',
    imgSrc: 'https://i.ibb.co/HCyhrsM/image-90.png'
  }
};

const RoomSummary = ({
  title,
  certifyTime,
  currentUserCount,
  maxUserCount,
  type,
  managerNickname
}: RoomSummaryProps) => {
  const certifyTimeToString = `${
    certifyTime < 10 ? `0${certifyTime}` : certifyTime
  } : 00`;
  const userCountToString = `${currentUserCount} / ${maxUserCount}`;

  return (
    <div className="flex items-center gap-4">
      <div className={birdByType[type].containerStyle}>
        <img
          className={birdByType[type].imgStyle}
          src={birdByType[type].imgSrc}
          alt={birdByType[type].bird}
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
