import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import { steps } from '@/pages/RoomNewPage';
import { roomOptions } from '@/core/api/options';
import { useFunnel } from '@/shared/Funnel';
import { LoadingSpinner } from '@/shared/LoadingSpinner';
import { Inputs } from '../hooks/useRoomForm';

interface NavbarProps {
  funnel: ReturnType<typeof useFunnel<typeof steps>>;
  isPending: boolean;
}

const Navbar = ({ isPending, funnel }: NavbarProps) => {
  const { trigger } = useFormContext<Inputs>();
  const { step, hasNext, hasPrev, toNext, toPrev } = funnel;

  // 참여 중인 방 정보를 가져오는 동안 다음 스텝으로 넘어가지 못하도록 합니다.
  const { isSuccess } = useQuery({ ...roomOptions.myJoin() });

  // 다음 스텝으로 넘어가기 전 각 스텝에서 수행되어야 할 유효성 검사 필드를 정의합니다.
  const validationMaps: Record<(typeof steps)[number], Array<keyof Inputs>> = {
    BirdStep: ['roomType'],
    TimeStep: ['certifyTime'],
    RoutineStep: ['routines', 'title', 'userCount'],
    PasswordStep: ['password'],
    SummaryStep: []
  };

  const handleToNext = async () => {
    if (!isSuccess) {
      return;
    }

    const isCompleted = await trigger(validationMaps[step], {
      shouldFocus: true
    });

    if (!hasNext || !isCompleted) {
      return;
    }

    // 다음 스텝으로 넘어가자마자 submit이 되는 현상 방지
    setTimeout(toNext, 0);
  };

  const buttonContent = isPending ? (
    <LoadingSpinner size="4xl" />
  ) : hasNext ? (
    '다음'
  ) : (
    '방 만들기'
  );

  return (
    <nav className="grid grid-cols-2 text-2xl">
      {hasPrev && (
        <button
          className="col-start-1 h-16 w-full bg-white text-dark-gray transition-all hover:bg-slate-100 dark:bg-dark-sub"
          type="button"
          onClick={toPrev}
        >
          이전
        </button>
      )}

      <button
        className={clsx(
          'col-start-2 flex h-16 w-full select-none items-center justify-center',
          'bg-light-point text-white transition-all hover:bg-light-point-hover',
          'dark:bg-dark-point hover:dark:bg-dark-point-hover',
          isPending && 'cursor-not-allowed'
        )}
        type={hasNext ? 'button' : 'submit'}
        disabled={isPending}
        onClick={handleToNext}
      >
        {buttonContent}
      </button>
    </nav>
  );
};

export default Navbar;
