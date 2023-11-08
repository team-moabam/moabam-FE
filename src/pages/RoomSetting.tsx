import { Header } from '@/shared/Header';
import { Tab, TabItem } from '@/shared/Tab';
import { RoomTab, MemberTab, RemoveTab } from '@/RoomSetting';

const RoomSetting = () => {
  return (
    <>
      <Header prev="roomDetail" />

      <Tab
        align="center"
        itemStyle="mt-10 px-8"
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
    </>
  );
};

export default RoomSetting;
