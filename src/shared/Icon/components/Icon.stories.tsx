import type { Meta, StoryObj } from '@storybook/react';
import { IconContext } from 'react-icons';
import { iconMap } from '../constants/icons';
import Icon from './Icon';

const meta = {
  title: 'Components/Icon',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'react-icons 라이브러리의 아이콘을 매핑한 컴포넌트입니다.'
      }
    }
  },
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconMap)
      }
    },
    size: {
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
    }
  }
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

const ProviderPage = () => {
  return (
    <IconContext.Provider value={{ className: 'text-green-500 text-[5rem]' }}>
      <Icon
        icon="HiHome"
        size="md"
      />
      <Icon
        icon="BiChevronDown"
        size="md"
      />
      <Icon
        icon="BiBugAlt"
        size="md"
      />
    </IconContext.Provider>
  );
};

export const Default: Story = {
  args: {
    icon: 'HiHome',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story:
          '기본적으로 `@shared/Icon/constants/icons.ts`에 정의된 아이콘을 사용합니다.<br/>' +
          '따라서 추가하고 싶은 아이콘이 있다면 해당 파일에 추가해주세요.<br/><br/>' +
          '`icon`: 아이콘의 이름을 입력합니다.<br/>' +
          '`size`: 아이콘의 크기를 입력합니다.'
      }
    }
  }
};

export const Tailwind: Story = {
  args: {
    icon: 'HiHome',
    size: 'md',
    className: 'text-[8rem] text-red-300 hover:text-red-500 cursor-pointer'
  },
  parameters: {
    docs: {
      description: {
        story:
          '아이콘 컴포넌트의 className으로 테일윈드의 클래스를 사용할 수 있습니다.<br/>' +
          '`font-size` 속성을 줄 경우, `size`의 값이 무시됩니다.<br/>'
      }
    }
  }
};

export const Provider: Story = {
  args: {
    icon: 'HiHome',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story:
          '`IconContext.Provider` 를 사용하여 여러 아이콘의 스타일을 동시에 지정할 수 있습니다.<br/>' +
          '이 경우 DOM 트리상에 공통 노드가 생성되지 않은 채 각각의 아이콘에 공통 스타일을 적용할 수 있습니다.<br/><br/>' +
          '그런데 ContextAPI를 사용하지 않고 상위 래퍼 노드에서 스타일을 줘도 됩니다. 이 경우에는 상위에 공통 노드가 생성됩니다.<br/>'
      }
    }
  },
  render: () => {
    return <ProviderPage />;
  }
};

export const AllIcons: Story = {
  args: {
    icon: 'HiHome'
  },
  parameters: {
    docs: {
      description: {
        story: '현재 앱에 등록된 모든 아이콘의 목록입니다.'
      }
    }
  },
  render: () => {
    return (
      <div className="flex gap-2">
        {Object.keys(iconMap).map((icon) => {
          return (
            <Icon
              key={icon}
              size="5xl"
              icon={icon as keyof typeof iconMap}
            />
          );
        })}
      </div>
    );
  }
};
