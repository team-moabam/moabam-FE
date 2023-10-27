/**
 * 이 파일처럼, 외부에서 컴포넌트를 가져와서 스토리를 작성할 수도 있습니다.
 */
import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    location: { control: 'radio', options: ['/', '/room', '/search', '/my'] }
  }
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { location: '/' }
};
