import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
const meta = {
  title: 'Shared/Input/Input',
  component: Input,
  argTypes: { size: { control: 'radio', options: ['sm', 'base', 'lg'] } }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
