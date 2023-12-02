import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta = {
  title: 'Shared/Avatar',
  component: Avatar,
  argTypes: {
    imgUrl: { control: 'string' },
    nickname: { control: 'string' },
    contribution: { control: 'number' },
    certified: { control: 'boolean' }
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: 'https://picsum.photos/200',
    userId: 123,
    nickname: '볼록눈이',
    contribution: 65
  }
};

export const Manager: Story = {
  args: {
    imgUrl: 'https://picsum.photos/200',
    userId: 123,
    nickname: '볼록눈이',
    contribution: 65,
    manager: true,
    certified: true
  }
};

export const Rank: Story = {
  args: {
    imgUrl: 'https://picsum.photos/200',
    userId: 123,
    nickname: '볼록눈이',
    manager: false
  }
};
