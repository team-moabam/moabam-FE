import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from './index';

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  argTypes: {}
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
