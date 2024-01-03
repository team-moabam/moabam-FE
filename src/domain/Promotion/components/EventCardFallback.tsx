const EventCardFallback = () => {
  return (
    <div className="flex w-full shrink-0 animate-pulse flex-col overflow-hidden rounded-xl">
      <div className="h-48 bg-dark-gray"></div>
      <div className="h-28 bg-light-gray px-3 py-4">
        <div className="flex h-full items-end justify-end">
          <div className="h-7 w-28 rounded-full bg-dark-gray text-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCardFallback;
