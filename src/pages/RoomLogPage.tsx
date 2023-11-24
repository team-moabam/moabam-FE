import { useLocation } from 'react-router-dom';
import RoomLogItem from '../RoomLog/components/RoomLogItem';
import { Header } from '@/shared/Header';
import { RankMember } from '@/core/types/Member';

const RoomLogPage = () => {
  const {
    state: { todayCertificateRank, routine, chooseDate }
  } = useLocation();

  return (
    <>
      <div className="dark:bg-dark-sub">
        <Header
          className="sticky  text-black"
          prev="roomDetail"
          title={`${chooseDate.getFullYear()}년 ${
            chooseDate.getMonth() + 1
          }월 ${chooseDate.getDate()}일`}
        />
      </div>
      <div className="h-full overflow-y-scroll px-7 py-[2.13rem]">
        {todayCertificateRank.map((data: RankMember) => (
          <RoomLogItem
            key={data.memberId}
            {...data}
            routine={routine}
          />
        ))}
      </div>
    </>
  );
};

export default RoomLogPage;
