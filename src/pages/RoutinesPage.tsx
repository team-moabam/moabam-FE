import { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from '@/core/hooks';
import RoomSlide from '@/RoomSlide/components/RoomSlide';
import { EventBanner } from '@/Promotion';
import { PWAInstallBanner } from '@/PWAInstallBanner';

const RoutinesPage = () => {
  const { theme } = useTheme();
  const DAY_TYPES =
    theme === 'dark'
      ? (['NIGHT', 'MORNING'] as const)
      : (['MORNING', 'NIGHT'] as const);

  return (
    <div className="flex h-full flex-col overflow-auto">
      <Swiper className="h-full w-full">
        {DAY_TYPES.map((roomType) => (
          <SwiperSlide
            className="h-full"
            key={roomType}
          >
            <RoomSlide roomType={roomType} />
          </SwiperSlide>
        ))}
      </Swiper>
      <PWAInstallBanner />
      <Suspense>
        <EventBanner />
      </Suspense>
    </div>
  );
};

export default RoutinesPage;
