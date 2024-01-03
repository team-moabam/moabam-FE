import { RoomSelectType } from '@/core/types';
import { useAllRooms } from '@/core/api/queries';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ResultList from './ResultList';

interface AllResultListProps {
  roomType: RoomSelectType;
}

const AllResultList = ({ roomType }: AllResultListProps) => {
  const { fetchNextPage, data, isFetchingNextPage, hasNextPage } = useAllRooms({
    roomType
  });

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

export default AllResultList;
