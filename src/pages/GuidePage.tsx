import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTheme } from '@/core/hooks';
import { GuideContent, GUIDE_CONTENTS } from '@/Guide';
import 'swiper/css/pagination';
import '@/Guide/styles/swiperBullets.css';

const GuidePage = () => {
  const { theme } = useTheme();
  const [guideEnd, setGuideEnd] = useState(false);

  return (
    <div className="relative flex h-full flex-col pt-40">
      <div className="h-full">
        <Swiper
          className="h-full"
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            stopOnLastSlide: true
          }}
          pagination={{
            clickable: true,
            bulletClass: 'bullet-custom',
            bulletActiveClass: `bullet-active-custom--${theme}`
          }}
          onReachEnd={() => setGuideEnd(true)}
        >
          {GUIDE_CONTENTS.map((guide) => (
            <SwiperSlide>
              <GuideContent {...guide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex h-32 flex-col justify-center px-8">
        {guideEnd && (
          <Link
            to="/"
            className="btn btn-light-point dark:btn-dark-point py-3 text-center font-IMHyemin-bold text-white"
          >
            시작!
          </Link>
        )}
      </div>
    </div>
  );
};

export default GuidePage;
