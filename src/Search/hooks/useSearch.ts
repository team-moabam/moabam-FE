import { createContext, useContext } from 'react';
import type { Room } from '@/RoomList/mocks/types/rooms';

interface SearchValue {
  keyword: string;
  page: number;
  type: 'all' | 'morning' | 'night';
  result: Room[];
}
const SearchContext = createContext<SearchValue>({
  keyword: '',
  page: 1,
  type: 'all',
  result: []
});

const useSearch = () => {
  return useContext(SearchContext);
};

export default useSearch;
