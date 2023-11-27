import type { Meta, StoryObj } from '@storybook/react';
import InnerTextInput from './InnerTextInput';

const meta = {
  title: 'Shared/Input/InnerTextInput',
  argTypes: {
    size: { control: 'radio', options: ['sm', 'base', 'lg'] },
    children: { control: 'text' }
  }
} satisfies Meta<typeof InnerTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: (args) => (
    <InnerTextInput
      {...args}
      text="4 / 20"
      textStyle="text-sm select-none"
    />
  )
};
