import RoomLogItem from '../RoomLog/components/RoomLogItem';
import { Header } from '@/shared/Header';

const RoomLogPage = () => {
  return (
    <>
      <div className="dark:bg-dark-sub">
        <Header
          className="sticky  text-black"
          prev="roomDetail"
          title="2023년 10월 8일"
        />
      </div>
      <div className="px-7 py-[2.13rem]">
        <RoomLogItem />
        <RoomLogItem />
        <RoomLogItem />
        <RoomLogItem />
        <RoomLogItem />
        <RoomLogItem />
        <RoomLogItem />
        <RoomLogItem />
        <RoomLogItem />
        <RoomLogItem />
      </div>
    </>
  );
};

export default RoomLogPage;
