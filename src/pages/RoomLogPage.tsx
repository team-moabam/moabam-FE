import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RankMember } from '@/core/types/Member';
import { Header } from '@/shared/Header';
import RoomLogItem from '../RoomLog/components/RoomLogItem';

const RoomLogPage = () => {
  const {
    state: { todayCertificateRank, routines, chooseDate, managerNickName }
  } = useLocation();
  const [chooseLog, setSelectLog] = useState<number>(-1);

  return (
    <div className="h-full overflow-y-scroll">
      <div className="bg-light-main dark:bg-dark-main">
        <Header
          className="sticky text-black"
          prev
          title={`${chooseDate.getFullYear()}년 ${
            chooseDate.getMonth() + 1
          }월 ${chooseDate.getDate()}일`}
        />
      </div>
      <div className="mb-[1.23rem]">
        {todayCertificateRank.map((data: RankMember) => (
          <RoomLogItem
            key={data.memberId}
            {...data}
            routines={routines}
            managerNickName={managerNickName}
            chooseLog={chooseLog}
            setSelectLog={setSelectLog}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomLogPage;
