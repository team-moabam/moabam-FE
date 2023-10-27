import type { Meta, StoryObj } from '@storybook/react';
import useBottomSheet from '../hooks/useBottomSheet';
import BottomSheet from './BottomSheet';

const meta = {
  title: 'Shared/BottomSheet'
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

const Page = () => {
  const { BottomSheet, toggle, close } = useBottomSheet();

  return (
    <>
      <button onClick={toggle}>토글</button>
      <BottomSheet>
        <h1>하이하이</h1>
        <div>요건 내부의 내용이에요</div>
        <div>요건 내부의 내용이에요</div>
        <div>요건 내부의 내용이에요</div>
        <div>요건 내부의 내용이에요</div>
        <button onClick={close}>이거 누르면 BottomSheet를 닫아요</button>
      </BottomSheet>
    </>
  );
};

export const Default: Story = {
  render: () => {
    return <Page />;
  }
};
