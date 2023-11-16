import { useState } from 'react';
import { RoomSelectType } from '@/core/types';
import { SearchBar, Selection, ResultList } from '@/RoomSearch';

const SearchPage = () => {
  const [type, setType] = useState<RoomSelectType>('all');
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
      <div className="h-full overflow-y-auto px-5 py-4">
        <ResultList type={type} />
      </div>
    </div>
  );
};

export default SearchPage;
