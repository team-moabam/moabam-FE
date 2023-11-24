import clsx from 'clsx';

const MyCouponListFallback = () => {
  const skeletonColor = 'bg-light-gray';

  return (
    <div className="relative flex w-full animate-pulse flex-col items-center gap-2 px-5">
      <div className={clsx('mt-5 h-16 w-full rounded-lg', skeletonColor)} />
      <div className={clsx('h-32 w-full rounded-lg', skeletonColor)} />
      <div className={clsx('h-32 w-full rounded-lg', skeletonColor)} />{' '}
      <div className={clsx('h-32 w-full rounded-lg', skeletonColor)} />
    </div>
  );
};

export default MyCouponListFallback;
