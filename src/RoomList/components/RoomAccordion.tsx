import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@/shared/Accordion';
import { RoomSummary } from '@/RoomSummary';
import { RoutineItem, RoutineList } from '@/shared/RoutineList';
import { Room } from '../mocks/types/rooms';

interface RoomAccordionProps {
  room: Room;
}

const RoomAccordion = ({ room }: RoomAccordionProps) => {
  const { routine } = room;
  return (
    <Accordion>
      <AccordionHeader className="w-full">
        <div className="w-full rounded-2xl bg-light-sub p-3 shadow dark:bg-dark-sub">
          <RoomSummary {...room} />
        </div>
      </AccordionHeader>
      <AccordionBody>
        <div className="rounded-2xl bg-light-sub p-3 shadow dark:bg-dark-sub">
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
