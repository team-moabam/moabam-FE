import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    imgUrl: { control: 'string' },
    nickname: { control: 'string' },
    contribution: { control: 'number' }
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: 'https://picsum.photos/200',
    nickname: '볼록눈이',
    contribution: 65
  }
};
