import { clsx } from 'clsx';
import { useMoveRoute } from '@/core/hooks';
import useHover from '@/RoomList/hooks/useHover';
import { Room } from '@/RoomList/mocks/types/rooms';
import { Accordion, AccordionHeader, AccordionBody } from '@/shared/Accordion';
import { RoomSummary } from '@/RoomSummary';
import { RoutineItem, RoutineList } from '@/shared/RoutineList';
import '@/RoomList/styles/roomList.css';

interface RoomAccordionProps {
  room: Room;
}

const RoomAccordion = ({ room }: RoomAccordionProps) => {
  const { routine, id } = room;
  const moveTo = useMoveRoute();

  const [hoverRef, hovered] = useHover<HTMLDivElement>();

  return (
    <Accordion className="w-full">
      <AccordionHeader
        buttonColored
        className={clsx(
          'room-card-bg room-card-ring relative z-10 rounded-2xl px-3',
          {
            'ring-2': hovered
          }
        )}
      >
        <div
          className="cursor-pointer py-3"
          onClick={() => moveTo('roomDetail', { roomId: id })}
          ref={hoverRef}
        >
          <RoomSummary {...room} />
        </div>
      </AccordionHeader>
      <AccordionBody className="room-card-bg relative top-[-0.6rem] rounded-b-2xl">
        <div className="p-4 pt-5">
          <RoutineList>
            {routine.map(({ routineId, content }) => (
              <RoutineItem
                key={routineId}
                contents={content}
              />
            ))}
          </RoutineList>
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default RoomAccordion;
