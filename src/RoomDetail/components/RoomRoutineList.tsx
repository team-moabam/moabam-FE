import { RoutineList, RoutineItem } from '@/shared/RoutineList';

interface RoomRoutineListProps {
  routines: {
    routineId: number;
    content: string;
  }[];
  certifyTime: number;
}

const RoomRoutineList = ({ routines, certifyTime }: RoomRoutineListProps) => {
  return (
    <div className="rounded-lg bg-light-sub px-[1.31rem] py-4 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05)] dark:bg-dark-sub ">
      <span className="mb-[1.31rem] block text-dark-gray">
        {`${certifyTime - 1}:50~${certifyTime}:10`}
      </span>
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

export default RoomRoutineList;
