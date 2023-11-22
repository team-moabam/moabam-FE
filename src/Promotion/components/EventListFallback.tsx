import EventCardFallback from './EventCardFallback';

const EventListFallback = () => {
  return (
    <div className="flex h-full flex-col items-center gap-6 overflow-y-auto p-6 pt-2">
      <EventCardFallback />
      <EventCardFallback />
      <EventCardFallback />
      <EventCardFallback />
    </div>
  );
};

export default EventListFallback;
