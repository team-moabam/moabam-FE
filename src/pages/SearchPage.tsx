import { Suspense, useState } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { RoomSelectType } from '@/core/types';
import { Deffered } from '@/shared/Deffered';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import ResultListFallback from '@/RoomSearch/components/ResultListFallback';
import { KeywordContext } from '@/RoomSearch';
import {
  SearchBar,
  Selection,
  SearchResultList,
  AllResultList
} from '@/RoomSearch';

const SearchPage = () => {
  const [roomType, setRoomType] = useState<RoomSelectType>('ALL');
  const [keyword, setKeyword] = useState('');

  return (
    <KeywordContext.Provider value={keyword}>
      <div className="flex h-full flex-col">
        <div className="px-6 pb-2 pt-6">
          <SearchBar onSearch={setKeyword} />
        </div>
        <div className="border-b px-6 py-3 dark:border-b-dark-sub">
          <Selection
            currentRoomType={roomType}
            setRoomType={setRoomType}
          />
        </div>
        <div className="h-full overflow-y-auto px-5 py-4">
          <ErrorBoundary fallback={<NetworkFallback />}>
            <Suspense
              fallback={
                <Deffered>
                  <ResultListFallback size={10} />
                </Deffered>
              }
            >
              {keyword ? (
                <SearchResultList
                  roomType={roomType}
                  keyword={keyword}
                />
              ) : (
                <AllResultList roomType={roomType} />
              )}
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </KeywordContext.Provider>
  );
};

export default SearchPage;
