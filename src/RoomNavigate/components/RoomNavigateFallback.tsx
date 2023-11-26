import { LoadingSpinner } from '@/shared/LoadingSpinner';

const RoomNavigateFallback = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <LoadingSpinner
        size="5xl"
        colorStyle="dark:text-dark-point text-light-point"
      />
    </div>
  );
};

export default RoomNavigateFallback;
