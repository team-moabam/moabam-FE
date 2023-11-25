import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Navbar } from '..';

const meta = {
  title: 'Shared/Navbar',
  component: Navbar,
  decorators: [withRouter],
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
