import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';
import { Room } from '@/core/types';
import { Accordion, AccordionHeader, AccordionBody } from '@/shared/Accordion';
import { RoutineItem, RoutineList } from '@/shared/RoutineList';
import roomListStyle from '@/RoomList/styles/roomListStyle';
import KeywordText from '@/RoomSearch/components/KeywordText';
import { RoomSummary } from '@/RoomSummary';
import { useKeyword } from '@/RoomSearch';

const isKeywordInRoutines = (
  keyword: string,
  routines: {
    routineId: number;
    content: string;
  }[]
) => {
  if (keyword === '') return false;
  return routines.some(({ content }) =>
    content.toLowerCase().includes(keyword.toLowerCase())
  );
};

interface RoomAccordionProps {
  room: Room;
}

const RoomAccordion = ({ room }: RoomAccordionProps) => {
  const { routines, id } = room;
  const moveTo = useMoveRoute();
  const keyword = useKeyword();

  return (
    <Accordion
      className="shrink-0"
      initialOpen={isKeywordInRoutines(keyword, routines)}
    >
      <AccordionHeader
        buttonColored
        className={clsx(
          'relative z-10 rounded-2xl px-3',
          roomListStyle['bg-room-card'],
          roomListStyle['ring-room-card'],
          'hover:ring-2'
        )}
        headerToggle
      >
        <div className="py-3">
          <RoomSummary {...room} />
        </div>
      </AccordionHeader>
      <AccordionBody
        className={clsx(
          'relative top-[-0.5rem] rounded-b-2xl',
          roomListStyle['bg-room-card']
        )}
      >
        <div className="flex items-end justify-between gap-1 p-4 pr-3 pt-5">
          <RoutineList>
            {routines.map(({ routineId, content }) => (
              <RoutineItem key={routineId}>
                <KeywordText
                  content={content}
                  keyword={keyword}
                />
              </RoutineItem>
            ))}
          </RoutineList>
          <button
            className={clsx(
              'btn btn-light-point dark:btn-dark-point h-fit py-2',
              'whitespace-nowrap font-IMHyemin-bold text-xs text-light-sub dark:text-dark-sub'
            )}
            onClick={() => moveTo('roomDetail', { roomId: id })}
          >
            보러 가기
          </button>
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default RoomAccordion;
