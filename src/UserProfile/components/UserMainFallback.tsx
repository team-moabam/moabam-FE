import clsx from 'clsx';

const UserMainFallback = () => {
  const skeletonColor = 'bg-light-gray';

  return (
    <div className="relative flex w-full animate-pulse flex-col items-center gap-2 pt-5">
      <div className={clsx('h-24 w-24 rounded-full', skeletonColor)} />
      <div className={clsx('h-6 w-56 rounded-lg', skeletonColor)} />
      <div className={clsx('h-6 w-56 rounded-lg', skeletonColor)} />
      <div className="flex w-full">
        <div className={clsx('h-8 w-16 rounded-lg', skeletonColor)} />
      </div>
      <div className={clsx('h-8 w-full rounded-lg', skeletonColor)} />
      <div className={clsx('mt-6 h-8 w-full rounded-lg', skeletonColor)} />
      <div className="flex w-full gap-2">
        <div className={clsx('h-52 grow rounded-lg', skeletonColor)} />
        <div className={clsx('h-52 grow rounded-lg', skeletonColor)} />
      </div>
      <div className={clsx('mt-6 h-36 w-full rounded-lg', skeletonColor)} />
    </div>
  );
};

export default UserMainFallback;
