import { Link } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { buttonVariants } from './index';

const meta = {
  title: 'Shared/ButtonVariants',
  tags: ['autodocs'],
  decorators: [withRouter],
  parameters: {
    docs: {
      description: {
        component: '버튼에 적용되는 기본 스타일을 제공합니다.'
      }
    }
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Themes: Story = {
  render: () => (
    <div className="flex gap-2">
      <button className={buttonVariants('danger')}>danger</button>
      <button className={buttonVariants('success')}>success</button>
      <button className={buttonVariants('warning')}>warning</button>
      <button className={buttonVariants('light-point')}>light-point</button>
      <button className={buttonVariants('dark-point')}>dark-point</button>
    </div>
  )
};

export const Options: Story = {
  render: () => (
    <div className="flex gap-2">
      <button className={buttonVariants('light-point')}>기본</button>
      <button className={buttonVariants('light-point', { hover: false })}>
        hover 제외
      </button>
      <button className={buttonVariants('light-point', { focus: false })}>
        focus 제외
      </button>
      <button className={buttonVariants('light-point', { click: false })}>
        click 제외
      </button>
      <button className={buttonVariants('light-point', { click: false })}>
        click 제외
      </button>
      <button
        className={buttonVariants('light-point', {
          hover: false,
          focus: false,
          click: false,
          disabled: false
        })}
      >
        전체 제외
      </button>
      <button
        className={buttonVariants('light-point')}
        disabled
      >
        disabled
      </button>
    </div>
  )
};

export const Tags: Story = {
  render: () => (
    <div className="flex gap-2">
      <button className={buttonVariants('light-point')}>button</button>
      <div className={buttonVariants('light-point')}>div</div>
      <span className={buttonVariants('light-point')}>span</span>
      <Link
        to="/"
        className={buttonVariants('success')}
      >
        Link
      </Link>
    </div>
  )
};

export const Custom: Story = {
  args: {},
  argTypes: {},
  render: (args) => <div>ㅇㅇ</div>
};
