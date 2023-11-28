const BirdCardFallback = () => {
  return (
    <div className="flex grow animate-pulse select-none flex-col items-center justify-center rounded-xl bg-white p-4 text-black dark:bg-dark-sub dark:text-white">
      <div className="h-20 w-20 rounded-full bg-light-gray" />
      <div className="mt-4 h-5 w-10 rounded-lg bg-light-gray" />
      <div className="mt-2 h-5 w-20 rounded-lg bg-light-gray" />
    </div>
  );
};

export default BirdCardFallback;
