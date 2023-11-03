import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionHeader, AccordionBody, AccordionGroup } from '.';

const meta = {
  title: 'Shared/Accordion',
  tags: ['autodocs']
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '펼치기/접기로 기능하는 아코디언 컴포넌트입니다.'
      }
    }
  },
  render: () => {
    return (
      <div className="font-IMHyemin-bold">
        <Accordion>
          <AccordionHeader>
            <div>Section 1</div>
          </AccordionHeader>
          <AccordionBody>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              dolorem qui similique quisquam vitae Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Neque quia doloremque, sit
              praesentium totam non possimus molestias quod, mollitia ducimus
              provident. Corrupti soluta sit dolor voluptas consequatur ex
              dolores veritatis.
            </small>
          </AccordionBody>
        </Accordion>
      </div>
    );
  }
};

export const DarkMode: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '아코디언 오픈 시 버튼에게 포인트 색상을 주고 싶다면, 헤더에게 buttonColored 를 부여합니다.'
      }
    }
  },
  render: () => {
    return (
      <div className="dark font-IMHyemin-bold text-white">
        <Accordion>
          <AccordionHeader
            className="bg-dark-main p-6"
            buttonColored
          >
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-slate-400"></div>
              <div>Section 1</div>
            </div>
            <small className="mt-5 block font-IMHyemin-regular">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              dolorem qui similique quisquam vitae Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </small>
          </AccordionHeader>
          <AccordionBody className="bg-dark-sub font-IMHyemin-regular">
            <small className="block p-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              dolorem qui similique quisquam vitae Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Neque quia doloremque, sit
              praesentium totam non possimus molestias quod, mollitia ducimus
              provident. Corrupti soluta sit dolor voluptas consequatur ex
              dolores veritatis.
            </small>
          </AccordionBody>
        </Accordion>
      </div>
    );
  }
};

export const Custom: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`AccordionHeader`, `AccordionBody` 에 className 을 부여하고, 하위 노드를 자유롭게 작성하여 커스텀할 수 있습니다.\
           <br/><b>하지만 대부분의 커스텀 스타일은 아코디언 컴포넌트가 아닌, 하위의 children 상에서 부여하는 것을 권장합니다! (특히, 위아래 padding)</b>'
      }
    }
  },
  render: () => {
    return (
      <div className="font-IMHyemin-bold">
        <Accordion>
          <AccordionHeader
            className="relative z-10 rounded-2xl border bg-light-main p-4 shadow-md"
            buttonColored
          >
            <div>Section 1</div>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              dolorem qui similique quisquam vitae
            </small>
          </AccordionHeader>
          <AccordionBody className="relative top-[-20px] z-0 rounded-2xl border shadow">
            <small className="block p-3 pt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              quia doloremque, sit praesentium totam non possimus molestias
              quod, mollitia ducimus provident. Corrupti soluta sit dolor
              voluptas consequatur ex dolores veritatis.
            </small>
          </AccordionBody>
        </Accordion>
      </div>
    );
  }
};

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'AccordionGroup 을 사용하여, AccordionHeader 와 AccordionBody 에 className 으로 부여되는 스타일을 일괄적용할 수 있습니다.'
      }
    }
  },
  render: () => {
    return (
      <div className="font-IMHyemin-bold">
        <AccordionGroup
          headerStyle="relative z-10 rounded-2xl border bg-light-main p-4 shadow-md"
          bodyStyle="relative top-[-20px] z-0 rounded-2xl border shadow"
          buttonColored
        >
          <Accordion>
            <AccordionHeader>
              <div>Section 1</div>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                dolorem qui similique quisquam vitae
              </small>
            </AccordionHeader>
            <AccordionBody>
              <small className="block p-3 pt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                quia doloremque, sit praesentium totam non possimus molestias
                quod, mollitia ducimus provident. Corrupti soluta sit dolor
                voluptas consequatur ex dolores veritatis.
              </small>
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>
              <div>Section 1</div>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                dolorem qui similique quisquam vitae
              </small>
            </AccordionHeader>
            <AccordionBody>
              <small className="block p-3 pt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                quia doloremque, sit praesentium totam non possimus molestias
                quod, mollitia ducimus provident. Corrupti soluta sit dolor
                voluptas consequatur ex dolores veritatis.
              </small>
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>
              <div>Section 1</div>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                dolorem qui similique quisquam vitae
              </small>
            </AccordionHeader>
            <AccordionBody>
              <small className="block p-3 pt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                quia doloremque, sit praesentium totam non possimus molestias
                quod, mollitia ducimus provident. Corrupti soluta sit dolor
                voluptas consequatur ex dolores veritatis.
              </small>
            </AccordionBody>
          </Accordion>
        </AccordionGroup>
      </div>
    );
  }
};
