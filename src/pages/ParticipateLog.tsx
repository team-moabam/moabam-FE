import { Header } from '@/shared/Header';
import LogList from '@/LogList/components/LogList';

const ParticipateLog = () => {
  return (
    <div className="h-full overflow-auto ">
      <Header
        prev="myPage"
        title="방 참여 기록"
        className="sticky top-0 bg-light-main dark:bg-dark-main"
      />
      <LogList />
    </div>
  );
};

export default ParticipateLog;
