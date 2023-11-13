import CertificationBottomSheet from './CertificationBottomSheet';
import { useBottomSheet } from '@/shared/BottomSheet';
import { RoutineList, RoutineItem } from '@/shared/RoutineList';

interface RoomRoutineProps {
  routines: { routineId: number; content: string }[];
}

const RoomRoutine = ({ routines }: RoomRoutineProps) => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();

  return (
    <>
      <CertificationBottomSheet
        bottomSheetProps={bottomSheetProps}
        close={close}
      />
      <div className="mb-[0.88rem] flex justify-between text-base">
        <h4 className="text-black dark:text-white">개인 인증</h4>
        <span className="text-dark-gray">아직이예여</span>
      </div>
      <div className="rounded-s-lg bg-light-sub px-[1.31rem] py-4 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05)] dark:bg-dark-sub ">
        <span className="mb-[1.31rem] block text-dark-gray">17:00~17:10</span>
        <RoutineList className="mb-8">
          {routines.map(({ routineId, content }) => (
            <RoutineItem
              key={routineId}
              contents={content}
              completed={false}
            />
          ))}
        </RoutineList>
        <button
          className="btn btn-light-point dark:btn-dark-point w-full rounded-lg text-base"
          onClick={toggle}
        >
          인증 하기!
        </button>
      </div>
    </>
  );
};

export default RoomRoutine;
