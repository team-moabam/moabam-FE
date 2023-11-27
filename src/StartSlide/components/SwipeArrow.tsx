import { Icon } from '@/shared/Icon';
import '@/StartSlide/styles/swipeArrow.css';

const SwipeArrow = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <Icon
        className="up-arrow-animation relative top-11"
        icon="LuChevronUp"
        size="6xl"
      />
      <Icon
        className="down-arrow-animation"
        icon="LuChevronUp"
        size="6xl"
      />

      <div className="animate-calmbounce">오늘의 루틴 보기</div>
    </div>
  );
};

export default SwipeArrow;
