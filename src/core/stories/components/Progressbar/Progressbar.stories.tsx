import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './Progressbar';

const meta = {
  title: 'Components/progressbar',
  component: ProgressBar,
  argTypes: { progress: { control: 'range', min: 1, max: 100 } }
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { progress: 50 }
};
