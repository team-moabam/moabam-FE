import React, { useState } from 'react';
import { totalRooms } from '@/RoomList/mocks/totalRooms';
import { SelectType } from '../types/search';
import Selection from './Selection';
import { Input } from '@/shared/Input';
import { RoomAccordion } from '@/RoomList';

const Search = () => {
  const { rooms } = totalRooms;
  const [type, setType] = useState<SelectType>('all');

  return (
    <div className="flex h-full flex-col">
      <div className="px-6 pb-2 pt-6">
        <Input
          className="rounded-2xl pl-4 dark:bg-dark-sub"
          placeholder="방 제목, 루틴 등을 써보세요"
        />
      </div>
      <div className="border-b px-6 py-3 dark:border-b-dark-sub">
        <Selection
          currentType={type}
          setType={setType}
        />
      </div>
      <div className="relative h-[50rem] overflow-y-scroll px-5">
        <div className="mt-3 flex flex-col gap-2 pb-4">
          {rooms.map((room) => (
            <RoomAccordion
              room={room}
              key={room.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
