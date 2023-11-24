import clsx from 'clsx';

const LogListFallback = () => {
  const skeletonColor = 'bg-light-gray';

  return (
    <div className="flex animate-pulse flex-col gap-2 px-3">
      <div className={clsx('h-16 w-full rounded-lg', skeletonColor)} />
      <div className={clsx('h-16 w-full rounded-lg', skeletonColor)} />
      <div className={clsx('h-16 w-full rounded-lg', skeletonColor)} />
    </div>
  );
};

export default LogListFallback;
