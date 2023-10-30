import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '..';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    location: {}
  }
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
