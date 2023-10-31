import { Funnel, useFunnel } from '@/shared/Funnel';
import 방선택 from '@/RoomCreate/components/방선택';
import 인증시간 from '@/RoomCreate/components/인증시간';
import 루틴정보 from '@/RoomCreate/components/루틴정보';

const RoomCreate = () => {
  const steps = ['방선택', '인증시간', '루틴정보'] as const;
  const funnel = useFunnel(steps);

  return (
    <>
      <Funnel {...funnel}>
        <Funnel.Step<typeof steps> name="루틴정보">
          <루틴정보 />
        </Funnel.Step>
        <Funnel.Step<typeof steps> name="인증시간">
          <인증시간 />
        </Funnel.Step>
        <Funnel.Step<typeof steps> name="방선택">
          <방선택 />
        </Funnel.Step>
      </Funnel>
      {funnel.hasPrev && (
        <button
          className="btn btn-danger"
          onClick={funnel.toPrev}
        >
          이전으로
        </button>
      )}
      {funnel.hasNext && (
        <button
          className="btn btn-success"
          onClick={funnel.toNext}
        >
          다음으로
        </button>
      )}
    </>
  );
};

export default RoomCreate;
