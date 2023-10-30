import { Link } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Examples/Button',
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
          'className으로 "btn btn-테마" 를 전달하면, 해당 테마의 색상이 적용됩니다.'
      }
    }
  },
  render: () => (
    <div className="flex gap-2">
      <button className="btn btn-danger">danger</button>
      <button className="btn btn-success">success</button>
      <button className="btn btn-warning">warning</button>
      <button className="btn btn-light-point">light-point</button>
      <button className="btn btn-dark-point">dark-point</button>
      <button
        className="btn btn-disabled"
        disabled
      >
        disabled
      </button>
    </div>
  )
};

export const Transitions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'btn-transition 클래스를 추가하면, hover, active, focus, active 등의 효과가 적용됩니다.'
      }
    }
  },
  render: () => (
    <div className="flex gap-2">
      <button className="btn btn-transition btn-danger">danger</button>
      <button className="btn btn-transition btn-success">success</button>
      <button className="btn btn-transition btn-warning">warning</button>
      <button className="btn btn-transition btn-light-point">
        light-point
      </button>
      <button className="btn btn-transition btn-dark-point">dark-point</button>
      <button
        className="btn btn-transition btn-disabled"
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
          '컴포넌트가 아닌 className으로 스타일을 매핑했기 때문에, button이 아닌 다른 태그에도 스타일을 적용할 수 있습니다.'
      }
    }
  },
  render: () => (
    <div className="flex gap-2">
      <button className="btn btn-transition btn-light-point">button</button>
      <div className="btn btn-transition btn-light-point">div</div>
      <span className="btn btn-transition btn-light-point">span</span>
      <Link
        to="/"
        className="btn btn-transition btn-light-point"
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
        <button className="btn btn-transition btn-danger w-full text-center">
          width 100%
        </button>
      </div>
      <div>
        <button
          disabled
          className="btn btn-transition btn-success flex items-center justify-center gap-2"
        >
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent" />
          <span>로딩중...</span>
        </button>
      </div>
    </div>
  )
};
