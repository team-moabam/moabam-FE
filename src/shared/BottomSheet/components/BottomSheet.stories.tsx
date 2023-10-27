import type { Meta, StoryObj } from '@storybook/react';
import { useBottomSheet, BottomSheet } from '..';

const meta = {
  title: 'Shared/BottomSheet'
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

const Page = () => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();

  return (
    <>
      <button onClick={toggle}>BottomSheet 열기</button>
      <BottomSheet {...bottomSheetProps}>
        <div className="rounded-2xl bg-dark-main p-2 text-white">
          <h1>하이하이</h1>
          <div>요건 내부의 내용이에요</div>
          <div>요건 내부의 내용이에요</div>
          <div>요건 내부의 내용이에요</div>
          <div>요건 내부의 내용이에요</div>
          <button onClick={close}>이거 누르면 BottomSheet를 닫아요</button>
        </div>
      </BottomSheet>
    </>
  );
};

export const Default: Story = {
  render: () => {
    return <Page />;
  }
};
