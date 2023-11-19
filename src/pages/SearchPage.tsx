import { Suspense, useState } from 'react';
import { RoomSelectType } from '@/core/types';
import { KeywordContext } from '@/RoomSearch';
import { SearchBar, Selection, ResultList } from '@/RoomSearch';
import { Deffered } from '@/shared/Deffered';
import ResultListFallback from '@/RoomSearch/components/ResultListFallback';

const SearchPage = () => {
  const [type, setType] = useState<RoomSelectType>('all');
  const [keyword, setKeyword] = useState('');

  return (
    <KeywordContext.Provider value={keyword}>
      <div className="flex h-full flex-col">
        <div className="px-6 pb-2 pt-6">
          <SearchBar onSearch={setKeyword} />
        </div>
        <div className="border-b px-6 py-3 dark:border-b-dark-sub">
          <Selection
            currentType={type}
            setType={setType}
          />
        </div>
        <div className="h-full overflow-y-auto px-5 py-4">
          <Suspense
            fallback={
              <Deffered>
                <ResultListFallback size={10} />
              </Deffered>
            }
          >
            <ResultList
              type={type}
              keyword={keyword}
            />
          </Suspense>
        </div>
      </div>
    </KeywordContext.Provider>
  );
};

export default SearchPage;
