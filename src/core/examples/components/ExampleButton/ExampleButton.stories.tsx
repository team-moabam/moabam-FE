/**
 * 이 파일처럼, 외부에서 컴포넌트를 가져와서 스토리를 작성할 수도 있습니다.
 */
import type { Meta, StoryObj } from '@storybook/react';
import ExampleButton from './ExampleButton';

const meta = {
  title: 'Components/ExampleButton',
  component: ExampleButton,
  argTypes: {
    bg: { control: 'radio', options: ['red', 'blue'] },
    p: { control: 'select', options: [2, 4, 8, 16] }
  }
} satisfies Meta<typeof ExampleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bg: 'red',
    p: 2,
    children: <div>예시용 버튼입니다</div>
  }
};
