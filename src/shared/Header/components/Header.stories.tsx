import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Header } from '@/shared/Header';

const meta = {
  title: 'Components/Header',
  tags: ['autodocs'],
  component: Header,
  decorators: [withRouter],
  argTypes: {
    titleSize: {
      control: 'radio',
      options: ['xl', 'md']
    }
  }
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '페이지 제목',
    titleSize: 'xl'
  }
};
