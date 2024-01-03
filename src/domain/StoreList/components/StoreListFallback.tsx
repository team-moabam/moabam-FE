import clsx from 'clsx';

const StoreListFallback = () => {
  const skeletonColor = 'bg-light-gray';

  return (
    <div className="mt-5 flex animate-pulse flex-col gap-2 px-5">
      <div className={clsx('h-12 w-full rounded-lg', skeletonColor)} />
      <div className={clsx('h-12 w-full rounded-lg', skeletonColor)} />
      <div className={clsx('h-12 w-full rounded-lg', skeletonColor)} />
    </div>
  );
};

export default StoreListFallback;
