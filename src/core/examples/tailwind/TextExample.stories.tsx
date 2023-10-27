import type { Meta, StoryObj } from '@storybook/react';
import TextExample from '@/core/examples/tailwind/TextExample';

const meta = {
  title: 'Examples/TextExample',
  component: TextExample,
  argTypes: {
    size: { control: 'radio', options: ['xs', 'sm', 'base', 'xl', '2xl'] },
    style: { control: 'radio', options: ['bold', 'regular'] }
  }
} satisfies Meta<typeof TextExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'base',
    style: 'bold'
  }
};
