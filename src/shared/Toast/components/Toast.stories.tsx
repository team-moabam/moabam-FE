import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const DefaultPage = () => {
  return (
    <div className="flex flex-col">
      <button
        onClick={() =>
          Toast.show(
            {
              message: '안녕하세요!',
              status: 'confirm'
            },
            3000
          )
        }
      >
        Show Confirm Toast
      </button>
      <button
        onClick={() =>
          Toast.show(
            {
              message: '신고가 접수되었습니다!',
              status: 'danger'
            },
            3000
          )
        }
      >
        Show Danger Toast
      </button>
      <button
        onClick={() =>
          Toast.show(
            {
              message: '안녕하세요!',
              status: 'confirm',
              icon: true,
              subText: '(살살)'
            },
            3000
          )
        }
      >
        Show Icon Confirm Toast
      </button>
    </div>
  );
};

const meta = {
  title: 'Shared/Toast',
  component: DefaultPage
} satisfies Meta<typeof DefaultPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
