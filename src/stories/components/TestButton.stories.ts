import type { Meta, StoryObj } from '@storybook/react';
import TestButton from './TestButton';

const meta = {
  title: 'Components/TestButton',
  component: TestButton
} satisfies Meta<typeof TestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
