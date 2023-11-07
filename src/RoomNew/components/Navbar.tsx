import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import { FunnelHook } from '@/shared/Funnel/hooks/useFunnel';
import { Inputs } from '../constants/form';
import { steps } from '@/pages/RoomNew';

interface NavbarProps extends FunnelHook<typeof steps> {
  isPending: boolean;
}

const Navbar = ({
  isPending,
  current,
  hasNext,
  hasPrev,
  toNext,
  toPrev
}: NavbarProps) => {
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

    // 다음 스텝으로 넘어가자마자 submit이 되는 현상 방지
    setTimeout(toNext, 0);
  };

  const buttonContent = () => {
    if (isPending) {
      return (
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-white border-t-transparent" />
      );
    }

    if (!hasNext) {
      return '방 만들기';
    }

    return '다음';
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
        className={clsx(
          'col-start-2 flex h-16 items-center justify-center',
          'rounded-ee-xl bg-light-point text-white transition-all hover:bg-light-point-hover',
          isPending && 'cursor-not-allowed'
        )}
        type={hasNext ? 'button' : 'submit'}
        disabled={isPending}
        onClick={handleToNext}
      >
        {buttonContent()}
      </button>
    </nav>
  );
};

export default Navbar;
