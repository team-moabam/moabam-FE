import type { Meta, StoryObj } from '@storybook/react';
import { Tab, TabItem, TabThumbnail } from '@/shared/Tab';

const meta = {
  title: 'Shared/Tab',
  tags: ['autodocs']
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

const containerStyle = 'box-border h-[500px] w-[400px] border p-3';

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`<Tab>` 으로 컨텐츠를 감싸고, 각 탭 컨텐츠를 `<TabItem title="헤더에 들어갈 제목">` 으로 감싸 적용할 수 있습니다. '
      }
    }
  },
  render: () => {
    return (
      <div className={'bg-light-main ' + containerStyle}>
        <Tab itemStyle="h-[500px]">
          <TabItem title="탭 제목 첫번째">
            <div className="flex h-full items-center justify-center bg-slate-300">
              탭 1 내용입니다.
            </div>
          </TabItem>
          <TabItem title="두번째 탭">
            <div className="flex h-full items-center justify-center bg-slate-400">
              탭 2 내용입니다.
            </div>
          </TabItem>
          <TabItem title="tab3">
            <div className="flex h-full items-center justify-center bg-slate-500">
              탭 3 내용입니다.
            </div>
          </TabItem>
        </Tab>
      </div>
    );
  }
};

export const DarkMode: Story = {
  parameters: {
    docs: {
      description: {
        story: '다크모드 / 라이트모드에 따른 스타일을 부여했습니다.'
      }
    }
  },
  render: () => {
    return (
      <div className={'dark bg-dark-main ' + containerStyle}>
        <Tab
          defaultIndex={0}
          align="center"
          itemStyle="h-[500px]"
        >
          <TabItem title="탭 제목 첫번째">
            <div className="h-full bg-slate-300">탭 1 내용입니다.</div>
          </TabItem>
          <TabItem title="두번째 탭">
            <div className="h-full bg-slate-400">탭 2 내용입니다.</div>
          </TabItem>
          <TabItem title="tab3">
            <div className="h-full bg-slate-500">탭 3 내용입니다.</div>
          </TabItem>
        </Tab>
      </div>
    );
  }
};

export const Example: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '- `align` 에 `start | center | end` 를 부여하여 탭 헤더의 위치를 지정해줄 수 있습니다. \n- `defaultIndex`에 TabItem의 인덱스 값 중 하나를 부여하여 첫번째로 보여야 하는 탭을 지정해줄 수 있습니다.'
      }
    }
  },
  render: () => {
    return (
      <div className={'bg-light-main ' + containerStyle}>
        <Tab
          defaultIndex={1}
          align="start"
          itemStyle="h-[500px]"
        >
          <TabItem title="탭 제목 첫번째">
            <div className="h-full bg-slate-300">탭 1 내용입니다.</div>
          </TabItem>
          <TabItem title="두번째 탭">
            <div className="h-full bg-slate-400">탭 2 내용입니다.</div>
          </TabItem>
          <TabItem title="tab3">
            <div className="h-full bg-slate-500">탭 3 내용입니다.</div>
          </TabItem>
        </Tab>
      </div>
    );
  }
};

export const Thumnail: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`<Tab>` 으로 컨텐츠를 감싸고, 각 탭 썸네일일 `<TabThumbnail>` 으로 감싸 적용할 수 있습니다. '
      }
    }
  },
  render: () => {
    return (
      <div className={'bg-light-main ' + containerStyle}>
        <Tab
          thumnailStyle="h-[300px] mb-4 bg-slate-200"
          itemStyle="h-[500px] bg-slate-300"
        >
          <TabThumbnail>
            <div>오목눈이 복장</div>
          </TabThumbnail>
          <TabThumbnail>
            <div>부엉이 복장</div>
          </TabThumbnail>
          <TabItem title="탭 제목 첫번째">
            <div>오목눈이 옷장</div>
          </TabItem>
          <TabItem title="두번째 탭">
            <div>부엉이 옷장</div>
          </TabItem>
        </Tab>
      </div>
    );
  }
};
