import React from 'react';
import useFunnel from '@/shared/Funnel/hooks/useFunnel';
import Funnel from '@/shared/Funnel/components/Funnel';
import Step from '@/shared/Funnel/components/Step';
import 방선택 from '@/RoomCreate/components/방선택';
import 인증시간 from '@/RoomCreate/components/인증시간';
import 루틴정보 from '@/RoomCreate/components/루틴정보';

// 1. Funnel 컴포넌트를 만든다.
// 2. Funnel.Step 컴포넌트를 만든다. (Compound Pattern)

// 그럼 상태 공유 가능! (Context API)
// 어떤 상태를 공유해야 할까? 현재 스탭?
// 이전 스탭과 다음 스탭 등등의 정보에 따라서 버튼의 내용이 달라져야하는데..
// 그 표현은 외부에 위임?

// Compound Pattern은 상태를 외부로 노출하지 않는 것인데, 지금은 외부에서 상태가 필요한 것 아닌가?
// 그럼 hook을 써야하나?

// 잠시만. useFunnel에서 hasNextStep 값을 알려면 steps의 길이를 알아야하는데..
// 그렇다면 선언할 시기에는 알 수 없네?
// hook에서 children의 길이를 어떻게 알지?
// 그냥 hook에서 initialStep prop을 받은걸 컴포넌트단에서 validation하고 context에 넣으면 되는 거 아닐까?

// 그냥 버튼에 대한 부분도 컴포넌트로 만들어놔야겠는데?
// 아니면 퍼널 컴포넌트에 레이아웃을 하나 만들어서 외부에서 그 컴포넌트를 주입할수있게한다면?

// *** 방법 떠올랐다. ***
// useFunnel에서 반드시 배열로 퍼널 스텝 리스트를 넣도록 하자.
// 그럼 훅에서 children의 길이를 알 수 있음.
// 그리고, Funnel 컴포넌트에서 퍼널 스텝 리스트 규칙에 어긋나는 녀석은 렌더링하지 않도록 하자.
// initialStep도 솔직히 없어도되는게, 대부분 어차피 퍼널 스탭에 나열할 때 0번쨰 인덱스부터

// TODO: 스탭에 들어가는 컴포넌트를 children으로 만들기
// TODO: 퍼널 스탭간에 상태 공유하기

//
const RoomCreate = () => {
  const steps = ['방선택', '인증시간', '루틴정보'] as const;
  const funnel = useFunnel(steps);

  console.log(funnel.current);

  return (
    <>
      <Funnel
        {...funnel}
        steps={steps}
      >
        <Funnel.Step<typeof steps> name="방선택">
          <방선택 />
        </Funnel.Step>
        <Funnel.Step<typeof steps> name="루틴정보">
          <루틴정보 />
        </Funnel.Step>
        <Funnel.Step<typeof steps> name="인증시간">
          <인증시간 />
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
