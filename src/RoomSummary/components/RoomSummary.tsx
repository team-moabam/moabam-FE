import IconText from './IconText';

// {
//   "roomId": 32,
//   "title": "윤명이의 루틴방",
//   "type": "MORNING",
//   "certifyTime": 9,
//   "currentUserCount": 5,
//   "maxUserCount": 9,
//   "isCertifiedToday": true
// },

interface RoomSummaryProps {
  title: string;
  type: 'MORNING' | 'NIGHT';
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
}

const birdByType = {
  // 임시입니다 mockData 아닙니다!
  MORNING: {
    containerStyle: 'h-12 w-12 rounded-full',
    imgStyle: '',
    bird: '오목눈이',
    imgSrc: 'https://i.ibb.co/QkqCq9J/image-107.png'
  },
  NIGHT: {
    containerStyle: 'relative h-12 w-12 rounded-full bg-[#FFF5E9]',
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
  type
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
        <div className="font-IMHyemin-bold">{title}</div>
        <div className="flex flex-col gap-1 text-xs text-dark-gray">
          <IconText
            icon="LuAlarmClock"
            text={certifyTimeToString}
          />
          <IconText
            icon="IoPeopleCircle"
            text={userCountToString}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomSummary;
