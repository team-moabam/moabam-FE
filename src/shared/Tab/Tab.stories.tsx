import type { Meta, StoryObj } from '@storybook/react';
import { Tab, TabItem } from '@/shared/Tab';

const meta = {
  title: 'Shared/Tab'
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

const TabExample = ({
  theme,
  align
}: {
  theme: 'dark' | 'light';
  align: 'start' | 'center' | 'end';
}) => {
  const tabItemStyle = 'flex h-full items-center justify-center';
  return (
    <div
      className={`${
        theme === 'dark' ? 'dark bg-dark-main' : 'bg-light-main'
      } box-border h-[500px] w-[400px] border p-3`}
    >
      <Tab
        defaultIndex={0}
        align={align}
      >
        <TabItem title="탭 제목 첫번째">
          <div className={`${tabItemStyle} bg-slate-300`}>탭 1 내용입니다.</div>
        </TabItem>
        <TabItem title="두번째 탭">
          <div className={`${tabItemStyle} bg-slate-400`}>탭 2 내용입니다.</div>
        </TabItem>
        <TabItem title="tab3">
          <div className={`${tabItemStyle} bg-slate-500`}>탭 3 내용입니다.</div>
        </TabItem>
      </Tab>
    </div>
  );
};

export const Default: Story = {
  render: () => {
    return (
      <TabExample
        theme="light"
        align="center"
      />
    );
  }
};

export const Dark: Story = {
  render: () => {
    return (
      <TabExample
        theme="dark"
        align="start"
      />
    );
  }
};
