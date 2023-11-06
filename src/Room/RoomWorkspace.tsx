import RoomCalendar from './RoomCalendar';
import RoomProgress from './RoomProgress';
import RoomRoutine from './RoomRoutine';
import RoomMembers from './RoomMembers';
import { Tab, TabItem } from '@/shared/Tab';

const RoomWorkspace = () => {
  return (
    <Tab
      align="center"
      defaultIndex={0}
    >
      <TabItem title="루틴">
        <RoomCalendar />
        <RoomProgress />
        <RoomRoutine />
        <button className="mt-[1.19rem] text-[0.87rem] text-black  dark:text-white">
          방 나가기
        </button>
      </TabItem>
      <TabItem title="멤버">
        <RoomMembers />
        <button className="mt-[1.62rem] text-[0.87rem] text-black dark:text-white">
          신고하기
        </button>
      </TabItem>
    </Tab>
  );
};

export default RoomWorkspace;
