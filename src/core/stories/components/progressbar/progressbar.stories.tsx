/**
 * 이 파일처럼, 외부에서 컴포넌트를 가져와서 스토리를 작성할 수도 있습니다.
 */
import type { Meta, StoryObj } from '@storybook/react';
import progressbar from './progressbar';

const meta = {
  title: 'Components/progressbar',
  component: progressbar,
  argTypes: { progress: { control: 'range', min: 1, max: 100 } }
} satisfies Meta<typeof progressbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { progress: 50 }
};
