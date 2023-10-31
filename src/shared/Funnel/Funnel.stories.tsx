import type { Meta, StoryObj } from '@storybook/react';
import { Funnel, useFunnel } from '.';

const meta = {
  title: 'Shared/Funnel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '순차적인 화면을 보여주는 데 도움을 주는 컴포넌트입니다.'
      }
    }
  }
} satisfies Meta<typeof Funnel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '**퍼널 컴포넌트 사용 방법**<br/>' +
          '**1. steps 정의** <br/>' +
          '`const steps = ["방선택", "인증시간", "루틴정보", "비밀번호", "마무리"] as const;`<br/><br/>' +
          '**2. useFunnel 훅 사용**<br/>' +
          '`const funnel = useFunnel(steps);`<br/><br/>' +
          '**3. Funnel 컴포넌트 사용**<br/>' +
          '`<Funnel {...funnel}>`<br/><br/>' +
          '**4. Funnel.Step 컴포넌트 사용**<br/>' +
          '`<Funnel.Step<typeof steps> name="방선택">방선택 페이지</Funnel.Step>`<br/>' +
          '`<Funnel.Step<typeof steps> name="인증시간">인증시간 페이지</Funnel.Step>`<br/>' +
          '`<Funnel.Step<typeof steps> name="루틴정보">루틴정보 페이지</Funnel.Step>`<br/>' +
          '`<Funnel.Step<typeof steps> name="비밀번호">비밀번호 페이지</Funnel.Step>`<br/>' +
          '`<Funnel.Step<typeof steps> name="마무리">마무리 페이지</Funnel.Step>`<br/>'
      }
    }
  },
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

  const funnel = useFunnel(steps);

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
