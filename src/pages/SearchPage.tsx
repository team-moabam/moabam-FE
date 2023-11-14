import { useState } from 'react';
import { totalRooms } from '@/RoomList/mocks/totalRooms';
import { SearchBar, Selection, ResultList } from '@/RoomSearch';
import { SelectType } from '@/RoomSearch/types/search';

const SearchPage = () => {
  // TODO : mock api 연결하기
  const { rooms } = totalRooms;
  const [type, setType] = useState<SelectType>('all');
  const [keyword, setKeyword] = useState('');

  return (
    <div className="flex h-full flex-col">
      <div className="px-6 pb-2 pt-6">
        <SearchBar
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </div>
      <div className="border-b px-6 py-3 dark:border-b-dark-sub">
        <Selection
          currentType={type}
          setType={setType}
        />
      </div>
      <div className="h-full overflow-y-scroll px-5 py-4 pr-3">
        <ResultList rooms={rooms} />
      </div>
    </div>
  );
};

export default SearchPage;
