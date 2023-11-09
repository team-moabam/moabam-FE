import { Header } from '@/shared/Header';
import LogList from '@/LogList/components/LogList';

const LogPage = () => {
  return (
    <>
      <Header
        prev="myPage"
        title="방 참여 기록"
      />
      <LogList />
    </>
  );
};

export default LogPage;
