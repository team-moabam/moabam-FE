import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '..';

const meta = {
  title: 'Shared/Navbar',
  component: Navbar,
  argTypes: {
    currentPath: {
      control: 'radio',
      options: ['/', '/room', '/search', '/user']
    }
  }
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { currentPath: '/' }
};
