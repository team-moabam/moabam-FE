import { RoomSelectType } from '@/core/types';
import { useSearchRooms } from '@/core/api/queries';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ResultList from './ResultList';

interface SearchResultListProps {
  roomType: RoomSelectType;
  keyword: string;
}

const SearchResultList = ({ roomType, keyword }: SearchResultListProps) => {
  const { fetchNextPage, data, isFetchingNextPage, hasNextPage } =
    useSearchRooms({ roomType, keyword });

  const intersectionRef = useIntersectionObserver({
    threshold: 0.5,
    onObserve: fetchNextPage
  });

  return (
    <ResultList
      data={data}
      infiniteScrollOptions={{
        isFetchingNextPage,
        hasNextPage,
        intersectionRef
      }}
    />
  );
};

export default SearchResultList;
