import { Header } from '@/shared/Header';
import { Tab, TabItem } from '@/shared/Tab';
import { RoomTab, MemberTab, RemoveTab } from '@/RoomSetting';

const RoomSetting = () => {
  return (
    <>
      <Header prev="roomDetail" />
      <main className="grow overflow-auto px-8">
        <Tab
          align="start"
          itemStyle="mt-5"
        >
          <TabItem title="방 관리">
            <RoomTab />
          </TabItem>
          <TabItem title="멤버 관리">
            <MemberTab />
          </TabItem>
          <TabItem title="방 삭제">
            <RemoveTab />
          </TabItem>
        </Tab>
      </main>
    </>
  );
};

export default RoomSetting;
