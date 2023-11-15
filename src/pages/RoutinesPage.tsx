import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from '@/core/hooks';
import { myJoinRoom } from '@/RoomList/mocks/myJoinRoom';
import { coupons } from '@/Promotion/mocks/coupons';
import { RoomSlide } from '@/RoomSlide';
import { EventBanner } from '@/Promotion';

const RoutinesPage = () => {
  // TODO : 참여중인 방 조회 + 진행 중인 쿠폰 조회
  const { participateRooms } = myJoinRoom;
  const { length: eventCount } = coupons;

  // TODO : 임시 시간대 설정 코드입니다. 수정 예정!
  const { theme } = useTheme();
  const DAY_TYPES =
    theme === 'dark'
      ? (['NIGHT', 'MORNING'] as const)
      : (['MORNING', 'NIGHT'] as const);

  const filterRooms = (dayType: 'MORNING' | 'NIGHT') =>
    participateRooms.filter(({ type }) => type === dayType);

  const totalBugs = (dayType: 'MORNING' | 'NIGHT') =>
    filterRooms(dayType).reduce((total, { bug }) => total + bug, 0);

  return (
    // <div className="flex h-full flex-col">
    <div className="flex h-full flex-col overflow-auto">
      <Swiper className="h-full w-full">
        {DAY_TYPES.map((type) => (
          <SwiperSlide
            className="h-full"
            key={type}
          >
            <RoomSlide
              rooms={filterRooms(type)}
              type={type}
              bugs={totalBugs(type)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <EventBanner eventCount={eventCount} />
    </div>
    // </div>
  );
};

export default RoutinesPage;
