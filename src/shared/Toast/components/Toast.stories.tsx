import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  args: {
    text: '구매되었습니다!',
    type: 'confirm'
  }
};

export const Info: Story = {
  args: {
    text: '인증 성공!',
    type: 'info'
  }
};

export const Danger: Story = {
  args: {
    text: '신고가 접수되었습니다',
    type: 'danger'
  }
};

export const IconInfo: Story = {
  args: {
    text: '페브리즈 에어님을 콕!',
    subText: '(살살)',
    type: 'info',
    icon: true
  }
};
