import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from './BottomSheet';

const meta = {
  title: 'Shared/BottomSheet',
  component: BottomSheet,
  argTypes: {}
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <BottomSheet {...args}>
      <h1>하이하이</h1>
      <div>요건 카드에요</div>
    </BottomSheet>
  )
};
