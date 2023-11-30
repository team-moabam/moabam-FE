import clsx from 'clsx';

const RankListFallback = () => {
  const skeletonColor = 'bg-light-gray';

  return (
    <>
      <div className="flex animate-pulse items-end bg-light-sub p-5 shadow-md dark:bg-dark-sub">
        <div className="flex h-full flex-1 flex-col justify-end pt-5">
          <div className="grid place-items-center">
            <div className="relative mb-5 aspect-square h-16 rounded-full bg-light-gray">
              <div className="absolute -bottom-1 -right-1 z-10 aspect-square w-6 rounded-full bg-dark-gray" />
            </div>
            <div className="h-4 w-16 bg-light-gray" />
            <div className="mt-2 h-4 w-12 bg-light-gray" />
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col justify-end pt-5">
          <div className="grid place-items-center">
            <div className="relative mb-5 aspect-square h-24 rounded-full bg-light-gray">
              <div className="absolute -bottom-1 -right-1 z-10 aspect-square w-8 rounded-full bg-dark-gray" />
            </div>
            <div className="h-4 w-16 bg-light-gray" />
            <div className="mt-2 h-4 w-12 bg-light-gray" />
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col justify-end pt-5">
          <div className="grid place-items-center">
            <div className="relative mb-5 aspect-square h-16 rounded-full bg-light-gray">
              <div className="absolute -bottom-1 -right-1 z-10 aspect-square w-6 rounded-full bg-dark-gray" />
            </div>
            <div className="h-4 w-16 bg-light-gray" />
            <div className="mt-2 h-4 w-12 bg-light-gray" />
          </div>
        </div>
      </div>
      <div className="mt-5 h-full animate-pulse overflow-auto bg-light-main text-black dark:bg-dark-main dark:text-white">
        <ul>
          {[0, 0, 0].map((_, i) => (
            <div
              className="flex h-16 items-center p-3"
              key={i}
            >
              <div
                className={clsx(
                  'mx-2 h-5 w-5 rounded-full text-center text-xl',
                  skeletonColor
                )}
              />
              <div
                className={clsx(
                  'mx-2 h-11 w-11 overflow-hidden rounded-full',
                  skeletonColor
                )}
              />
              <div className={clsx('h-5 w-36 rounded-full', skeletonColor)} />
              <div className="flex-1" />
              <div className={clsx('h-5 w-14 rounded-full', skeletonColor)} />
            </div>
          ))}
        </ul>
      </div>
      <div className="flex h-16 animate-pulse items-center bg-light-sub p-3 dark:bg-dark-sub">
        <div
          className={clsx(
            'mx-2 h-5 w-5 rounded-full text-center text-xl',
            skeletonColor
          )}
        ></div>
        <div
          className={clsx(
            'mx-2 h-11 w-11 overflow-hidden rounded-full',
            skeletonColor
          )}
        />
        <div className={clsx('h-5 w-36 rounded-full', skeletonColor)} />
        <div className="flex-1" />
        <div className={clsx('h-5 w-14 rounded-full', skeletonColor)} />
      </div>
    </>
  );
};

export default RankListFallback;
