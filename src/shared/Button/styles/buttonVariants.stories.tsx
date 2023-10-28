import { Link } from 'react-router-dom';
import clsx from 'clsx';
import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import buttonVariants from './buttonVariants';

const meta = {
  title: 'Shared/Button/buttonVariants',
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
  parameters: {
    docs: {
      description: {
        story:
          'buttonVariants() 함수의 첫 번째 인자로 색상 테마를 설정할 수 있습니다.'
      }
    }
  },
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
  parameters: {
    docs: {
      description: {
        story:
          '모든 버튼은 기본적으로 hover, focus, click, disabled 상태에 따라 스타일이 변경됩니다. 이를 제어하기 위해 두 번째 인자로 객체를 전달할 수 있습니다.'
      }
    }
  },
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
  parameters: {
    docs: {
      description: {
        story:
          '컴포넌트가 아닌 객체로 스타일을 매핑했기 때문에, button이 아닌 다른 태그에도 스타일을 적용할 수 있습니다.'
      }
    }
  },
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

export const Examples: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '버튼에 추가로 스타일을 적용하고 싶다면, className을 추가할 수 있습니다.'
      }
    }
  },
  render: () => (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-full">
        <button
          className={clsx(buttonVariants('danger'), 'w-full text-center')}
        >
          width 100%
        </button>
      </div>
      <div>
        <button
          disabled
          className={clsx(
            buttonVariants('success'),
            'flex items-center justify-center gap-2'
          )}
        >
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent" />
          <span>로딩중...</span>
        </button>
      </div>
    </div>
  )
};
