import useFunnel from '@/shared/Funnel/hooks/useFunnel';
import 방선택 from '@/RoomCreate/components/방선택';
import 인증시간 from '@/RoomCreate/components/인증시간';
import 루틴정보 from '@/RoomCreate/components/루틴정보';

const RoomCreate = () => {
  const { steps, currentStep, toPrevStep, toNextStep } = useFunnel(
    [<방선택 />, <인증시간 />, <루틴정보 />],
    0
  );

  return (
    <>
      <div>{steps[currentStep]}</div>
      <div>
        <button
          className="btn btn-danger"
          onClick={toPrevStep}
        >
          이전으로
        </button>
        <button
          className="btn btn-success"
          onClick={toNextStep}
        >
          다음으로
        </button>
      </div>
    </>
  );
};

export default RoomCreate;
