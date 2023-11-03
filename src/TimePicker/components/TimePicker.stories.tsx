import type { Meta, StoryObj } from '@storybook/react';
import TimePicker from './TimePicker';
import '../styles/TimePicker.css';

const meta = {
  title: 'Components/TimePicker',
  tags: ['autodocs'],
  component: TimePicker,
  parameters: {
    docs: {
      description: {
        component:
          '시간을 선택할 수 있는 컴포넌트입니다.<br/>' +
          '마우스 휠이나 드래그로 시간을 선택할 수 있습니다.<br/>'
      }
    }
  },
  argTypes: {
    range: {
      control: 'array',
      description: '선택할 수 있는 시간 범위'
    },
    initialTime: {
      control: 'number',
      description: '기본으로 선택되어 있는 시간'
    },
    className: {
      control: 'string',
      description: '컴포넌트에 추가할 클래스 (tailwind 스타일링 가능)'
    },
    onTimeChange: {
      control: 'function',
      description: '시간을 선택할 때 호출되는 콜백함수'
    }
  }
} satisfies Meta<typeof TimePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    range: [5, 27],
    initialTime: 10,
    onTimeChange: (time) => console.log(time, '시를 선택했습니다.')
  },
  render: (args) => <TimePicker {...args} />
};
