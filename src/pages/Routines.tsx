import { Header } from '@/shared/Header';

const Routines = () => {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Routines"
        className=" bg-slate-400 "
      />
      <div className="h-full overflow-auto">
        <div className="h-[1000px]">Routine</div>
      </div>
    </div>
  );
};

export default Routines;
