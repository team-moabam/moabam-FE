import { RoutineList, RoutineItem } from '@/shared/RoutineList';

const RoomRoutine = () => {
  return (
    <div>
      <div className="mb-[0.88rem] flex justify-between text-base">
        <h4 className="text-black dark:text-white">개인 인증</h4>
        <span className="text-darkGray">아직이예여</span>
      </div>
      <div className="rounded-[0.5rem] bg-light-sub px-[1.31rem] py-[1rem] shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05)] dark:bg-dark-sub ">
        <span className="mb-[1.31rem] block text-darkGray">17:00~17:10</span>
        <RoutineList className="mb-[2rem]">
          <RoutineItem
            contents="책 읽기"
            completed={false}
          />
          <RoutineItem
            contents="책 읽기"
            completed={false}
          />
          <RoutineItem
            contents="책 읽기"
            completed={false}
          />
        </RoutineList>
        <button className="btn btn-disabled w-full rounded-[0.5rem] text-base">
          인증시간이 아닙니다
        </button>
      </div>
    </div>
  );
};

export default RoomRoutine;
