import { Header } from '@/shared/Header';
import { Tab, TabItem } from '@/shared/Tab';

const RoomSetting = () => {
  return (
    <>
      <Header prev="roomDetail" />
      <main className="grow overflow-auto px-8 py-12">
        <Tab align="start">
          <TabItem title="방 관리">방 관리 내용입니다.</TabItem>
          <TabItem title="멤버 관리">멤버 관리 내용입니다.</TabItem>
          <TabItem title="방 삭제">방 삭제 내용입니다.</TabItem>
        </Tab>
      </main>
    </>
  );
};

export default RoomSetting;
