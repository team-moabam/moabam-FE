import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from '@/core/hooks';
import { myJoinRoom } from '@/RoomList/mocks/myJoinRoom';
import RoomSlide from '@/RoomSlide/components/RoomSlide';

const Routines = () => {
  const { participateRooms } = myJoinRoom;

  // TODO : 임시 시간대 설정 코드입니다. 수정 예정!
  const { theme } = useTheme();
  const dayTypeNumber = theme === 'dark' ? 1 : 0;

  const filterRooms = (dayType: 'MORNING' | 'NIGHT') =>
    participateRooms.filter(({ type }) => type === dayType);

  const totalBugs = (dayType: 'MORNING' | 'NIGHT') =>
    filterRooms(dayType).reduce((total, { bug }) => total + bug, 0);

  return (
    <div className="flex h-full flex-col">
      <div className="h-full overflow-auto">
        <Swiper
          initialSlide={dayTypeNumber}
          className="h-full"
        >
          <SwiperSlide className="h-full">
            <RoomSlide
              rooms={filterRooms('MORNING')}
              type="MORNING"
              bugs={totalBugs('MORNING')}
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <RoomSlide
              rooms={filterRooms('NIGHT')}
              type="NIGHT"
              bugs={totalBugs('NIGHT')}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Routines;
