import { RoutineList, RoutineItem } from '@/shared/RoutineList';

interface RoomPreviewRoutineProps {
  routines: {
    routineId: number;
    content: string;
  }[];
  certifyTime: number;
}

const RoomPreviewRoutine = ({
  routines,
  certifyTime
}: RoomPreviewRoutineProps) => {
  return (
    <div className="rounded-lg bg-light-sub px-[1.31rem] py-4 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05)] dark:bg-dark-sub ">
      <div className="mb-[1.31rem] text-dark-gray">
        <span className="mr-2">
          {certifyTime}:00{certifyTime < 12 ? 'AM' : 'PM'}
        </span>
        <span>
          ({certifyTime}:00 ~ {certifyTime}:10)
        </span>
      </div>
      <RoutineList className="mb-8">
        {routines.map(({ routineId, content }) => (
          <RoutineItem
            key={routineId}
            contents={content}
          />
        ))}
      </RoutineList>
    </div>
  );
};

export default RoomPreviewRoutine;
