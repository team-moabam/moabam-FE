import { LoadingSpinner } from '@/shared/LoadingSpinner';

const LoadingFallback = () => {
  return (
    <div className="flex justify-center overflow-hidden">
      <LoadingSpinner
        size="7xl"
        colorStyle="text-black"
      />
    </div>
  );
};

export default LoadingFallback;
