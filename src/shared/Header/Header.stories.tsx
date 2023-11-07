import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Header } from '.';
import { Icon } from '../Icon';

const meta = {
  title: 'Shared/Header',
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
    titleSize: 'xl',
    prev: '/'
  },
  parameters: {
    docs: {
      description: {
        story: '헤더 컴포넌트입니다.'
      }
    }
  }
};
export const OnlyPrev: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '뒤로가기 버튼을 추가하고 싶을 경우, `prev` 에 클릭 시 이동할 링크를 작성합니다.'
      }
    }
  },
  render: () => {
    return (
      <div className="h-40 w-full border bg-light-main">
        <Header prev="/" />
        <div className="m-10">page</div>
      </div>
    );
  }
};
export const TitleSize: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'titleSize의 기본값은 `xl`입니다. 글자가 더 작아야 하는 상황의 경우, `md`로 설정할 수 있습니다.<br/>다크모드 적용 시 색상이 변화합니다.'
      }
    }
  },
  render: () => {
    return (
      <div className="dark h-40 w-full border bg-dark-main">
        <Header
          prev="/"
          title={
            <div className="flex items-center gap-3">
              2023년 10월 31일 <Icon icon="BiBugAlt" />
            </div>
          }
          titleSize="md"
        />
        <div className="m-10">page</div>
      </div>
    );
  }
};

export const WithChild: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'children, className 을 추가하여 기능과 UI를 커스텀할 수 있습니다.'
      }
    }
  },
  render: () => {
    return (
      <div className="h-40 w-full bg-slate-200">
        <Header
          title="페이지 제목"
          className="bg-red-200"
        >
          <div className="flex gap-2">
            <Icon
              icon="PiBirdFill"
              size="xl"
            />
            <Icon
              icon="BiSolidShareAlt"
              size="xl"
            />
          </div>
        </Header>
        <div className="m-10">page</div>
      </div>
    );
  }
};
