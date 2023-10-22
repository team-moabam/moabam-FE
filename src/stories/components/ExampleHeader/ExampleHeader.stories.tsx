/**
 * 이 파일처럼, 내부에서 컴포넌트를 렌더링하여 스토리를 작성할 수도 있습니다.
 */
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ExampleHeader',
  render: () => (
    <div className="flex justify-center bg-green-300 p-4">
      예시용 헤더입니다
    </div>
  )
} satisfies Meta;

export default meta;

type Story = StoryObj<React.ReactNode>;

export const Primary: Story = {
  args: {}
};
