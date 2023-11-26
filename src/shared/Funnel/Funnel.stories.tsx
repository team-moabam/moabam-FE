import type { Meta, StoryObj } from '@storybook/react';
import { Funnel, useFunnel } from '.';

const meta = {
  title: 'Shared/Funnel'
} satisfies Meta<typeof Funnel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DefaultPage />
};

const DefaultPage = () => {
  const steps = [
    '방선택',
    '인증시간',
    '루틴정보',
    '비밀번호',
    '마무리'
  ] as const;

  const funnel = useFunnel(steps, '인증시간');

  return (
    <div className="bg-slate-100">
      <div className="flex min-h-[700px] items-center justify-center text-4xl">
        <Funnel {...funnel}>
          <Funnel.Step<typeof steps> name="마무리">마무리 페이지</Funnel.Step>
          <Funnel.Step<typeof steps> name="비밀번호">
            비밀번호 페이지
          </Funnel.Step>
          <Funnel.Step<typeof steps> name="루틴정보">
            루틴정보 페이지
          </Funnel.Step>
          <Funnel.Step<typeof steps> name="인증시간">
            인증시간 페이지
          </Funnel.Step>
          <Funnel.Step<typeof steps> name="방선택">방선택 페이지</Funnel.Step>
          <div>Step 컴포넌트가 아닌 요소는 렌더링에서 무시돼요.</div>
          <div>
            children에 순서를 뒤죽박죽으로 등록해도 steps 배열에 들어가있는
            순서로 스텝을 보여줘요.
          </div>
        </Funnel>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="grid w-full grid-cols-2">
          {funnel.hasPrev && (
            <button
              className="btn btn-danger col-start-1 w-full rounded-none"
              onClick={funnel.toPrev}
            >
              이전으로
            </button>
          )}
          {funnel.hasNext && (
            <button
              className="btn btn-success col-start-2 w-full rounded-none"
              onClick={funnel.toNext}
            >
              다음으로
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
