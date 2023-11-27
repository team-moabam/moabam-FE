import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from '@/core/hooks';
import { useMoveRoute } from '@/core/hooks';
import Background from '@/StartSlide/components/Background';
import UserInfo from '@/StartSlide/components/UserInfo';
import RoutinesPage from './RoutinesPage';

const StartPage = () => {
  // TODO : 임시 시간대 설정 코드입니다. 수정 예정!
  const { theme } = useTheme();
  const dayType = theme === 'light' ? 'morning' : 'night';
  const moveTo = useMoveRoute();

  return (
    <div className="h-full">
      <div className="absolute h-full w-full">
        <RoutinesPage />
      </div>
      <Swiper
        className="h-full"
        direction="vertical"
        onReachEnd={() => moveTo('routines')}
      >
        <SwiperSlide className="shadow-lg">
          <Background type={dayType} />
          <UserInfo type={dayType} />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StartPage;
