import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from './PasswordInput';

const meta = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  argTypes: { size: { control: 'radio', options: ['sm', 'base', 'lg'] } }
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
