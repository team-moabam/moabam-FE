import { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { Title, Description, Stories } from '@storybook/blocks';
import { baseURL } from '@/core/mocks/baseURL';
import { RoomInfoBeforeEditing } from '@/core/mocks/datas/room';
import RemoveTab from './RemoveTab';

const meta = {
  title: 'Pages/RoomSetting/RemoveTab',
  component: RemoveTab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '방 관리 페이지의 삭제 탭에서는 조건부 렌더링이 존재합니다.'
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Stories />
        </>
      )
    },
    msw: {
      handlers: [
        http.get(baseURL('/rooms/:roomId'), async ({ params }) => {
          const { roomId } = params;

          switch (roomId) {
            case '1':
              return HttpResponse.json({
                ...RoomInfoBeforeEditing,
                participants: RoomInfoBeforeEditing.participants[0]
              });
            default:
              return HttpResponse.json(RoomInfoBeforeEditing);
          }
        })
      ]
    }
  }
} satisfies Meta<typeof RemoveTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneParticipant: Story = {
  args: {
    roomId: '1'
  },
  parameters: {
    docs: {
      description: {
        story: '방에 참여한 사람이 본인만 남았다면 방 삭제가 가능합니다.'
      }
    }
  }
};

export const MultiParticipant: Story = {
  args: {
    roomId: '2'
  },
  parameters: {
    docs: {
      description: {
        story: '참여자가 여러 명인 경우 방 삭제가 불가능합니다.'
      }
    }
  }
};
