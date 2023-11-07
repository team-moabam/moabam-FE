import { useFormContext } from 'react-hook-form';
import { FunnelHook } from '@/shared/Funnel/hooks/useFunnel';
import { Inputs } from '../constants/form';
import { steps } from '@/pages/RoomNew';

const Navbar = ({
  current,
  hasNext,
  hasPrev,
  toNext,
  toPrev
}: FunnelHook<typeof steps>) => {
  const { trigger } = useFormContext<Inputs>();

  // 다음 스텝으로 넘어가기 전 각 스텝에서 수행되어야 할 유효성 검사 필드를 정의합니다.
  const validationMaps: Record<(typeof steps)[number], Array<keyof Inputs>> = {
    BirdStep: ['type'],
    TimeStep: ['certifyTime'],
    RoutineStep: ['routines', 'title', 'userCount'],
    PasswordStep: ['password'],
    SummaryStep: []
  };

  const handleToNext = async () => {
    const isCompleted = await trigger(validationMaps[current], {
      shouldFocus: true
    });

    if (!hasNext || !isCompleted) {
      return;
    }

    toNext();
  };

  return (
    <nav className="grid grid-cols-2 text-2xl">
      {hasPrev && (
        <button
          className="col-start-1 h-16 rounded-es-xl bg-white text-dark-gray transition-all hover:bg-slate-100"
          type="button"
          onClick={toPrev}
        >
          이전
        </button>
      )}

      <button
        className="col-start-2 h-16 rounded-ee-xl bg-light-point text-white transition-all hover:bg-light-point-hover"
        type={hasNext ? 'button' : 'submit'}
        onClick={handleToNext}
      >
        {hasNext ? '다음' : '방 만들기'}
      </button>
    </nav>
  );
};

export default Navbar;
