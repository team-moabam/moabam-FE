import type { Meta, StoryObj } from '@storybook/react';
import { RoutineList, RoutineItem } from '.';

const meta = {
  title: 'Shared/RoutineList',
  tags: ['autodocs']
} satisfies Meta<typeof RoutineList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '루틴 목록을 보여주는 컴포넌트입니다.<br/>ul, li 처럼 RoutineList로 RoutineItem들을 감싸 적용합니다.'
      }
    }
  },
  render: () => {
    return (
      <RoutineList>
        <RoutineItem>밥 먹기</RoutineItem>
        <RoutineItem
          contents="세수 하기"
          completed
        />
        <RoutineItem contents="책 읽기" />
      </RoutineList>
    );
  }
};
export const DarkMode: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '다크모드일 시, completed를 나타내는 동그란 UI의 컬러가 변화합니다.'
      }
    }
  },
  render: () => {
    return (
      <div className="dark bg-dark-main p-2 text-white">
        <RoutineList>
          <RoutineItem>밥 먹기</RoutineItem>
          <RoutineItem
            contents="세수 하기"
            completed
          />
          <RoutineItem contents="책 읽기" />
        </RoutineList>
      </div>
    );
  }
};
