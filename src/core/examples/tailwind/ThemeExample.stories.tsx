import type { Meta, StoryObj } from '@storybook/react';
import ThemeExample from '@/core/examples/tailwind/ThemeExample';

const meta = {
  title: 'Examples/ThemeExample',
  component: ThemeExample,
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] }
  }
} satisfies Meta<typeof ThemeExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: 'light'
  }
};
