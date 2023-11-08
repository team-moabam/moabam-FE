import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

const meta = {
  title: 'Shared/LoadingSpinner',
  tags: ['autodocs'],
  component: LoadingSpinner,
  parameters: {
    docs: {
      description: {
        component: '로딩 상태를 나타내는 UI 컴포넌트입니다.'
      }
    }
  },
  argTypes: {
    size: {
      description:
        '텍스트 크기를 지정하여 스피너의 크기를 변경할 수 있습니다.<br/><br/>',
      control: {
        type: 'select',
        options: [
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '3xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl'
        ]
      }
    },
    colorStyle: {
      type: 'string',
      description:
        '텍스트 색상을 지정하여 스피너의 색상을 변경할 수 있습니다.<br/><br/>'
    },
    borderStyle: {
      type: 'string',
      description:
        'border의 크기를 지정하여 스피너의 굵기를 변경할 수 있습니다.<br/><br/>'
    }
  }
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    colorStyle: 'text-black',
    borderStyle: 'border-2'
  }
};

export const Examples: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <LoadingSpinner
        size="2xl"
        colorStyle="text-success"
      />
      <LoadingSpinner
        size="3xl"
        colorStyle="text-red-600"
        borderStyle="border-3"
      />
      <LoadingSpinner
        size="4xl"
        colorStyle="text-blue-500"
        borderStyle="border-4"
      />
      <LoadingSpinner
        size="6xl"
        colorStyle="text-light-point"
        borderStyle="border-6"
      />
    </div>
  )
};
