import type { Meta, StoryObj } from '@storybook/react';
import { createFunnel } from '.';

const meta = {
  title: 'Shared/Funnel'
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DefaultPage />
};

const { Funnel, Step, useFunnel } = createFunnel([
  '방선택',
  '인증시간',
  '루틴정보',
  '비밀번호',
  '마무리'
] as const);

const DefaultPage = () => {
  const { step, hasNext, hasPrev, setStep, toNext, toPrev } = useFunnel();

  return (
    <div className="bg-slate-100">
      <div className="flex min-h-[700px] items-center justify-center text-4xl">
        <Funnel step={step}>
          <Step name="마무리">
            <div>마무리 페이지</div>
            <button onClick={() => setStep('방선택')}>처음으로 이동하기</button>
          </Step>
          <Step name="비밀번호">비밀번호 페이지</Step>
          <Step name="루틴정보">루틴정보 페이지</Step>
          <Step name="인증시간">인증시간 페이지</Step>
          <Step name="방선택">방선택 페이지</Step>
          <div>Step 컴포넌트가 아닌 요소는 렌더링에서 무시돼요.</div>
          <div>
            children에 순서를 뒤죽박죽으로 등록해도 steps 배열에 들어가있는
            순서로 스텝을 보여줘요.
          </div>
          <div>
            또는 각 스텝에서 다음 스텝으로 넘어가는 로직에 setStep을 사용하고
            핸들러로 전달할 수 있어요.
          </div>
        </Funnel>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="grid w-full grid-cols-2">
          {hasPrev && (
            <button
              className="btn btn-danger col-start-1 w-full rounded-none"
              onClick={toPrev}
            >
              이전으로
            </button>
          )}
          {hasNext && (
            <button
              className="btn btn-success col-start-2 w-full rounded-none"
              onClick={toNext}
            >
              다음으로
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
