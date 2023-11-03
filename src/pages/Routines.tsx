import RoomSummary from '@/RoomSummary/components/RoomSummary';
import { Header } from '@/shared/Header';

const Routines = () => {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Routines"
        className=" bg-slate-400 "
      />
      <div className="h-full overflow-auto">
        <div className="h-[1000px]">
          <RoomSummary
            title="물마시기"
            type="MORNING"
            certifyTime={8}
            currentUserCount={6}
            maxUserCount={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Routines;
