import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useBottomSheet, BottomSheet } from '..';

const meta = {
  title: 'Shared/BottomSheet',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '배경을 흐리게 하고 하단에서 BottomSheet가 등장하는 컴포넌트를 제공합니다.'
      }
    }
  }
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'useBottomSheet() 훅을 사용하여 BottomSheet를 사용할 수 있습니다. 구조 분해 할당을 통한 bottomSheetProps의 전달을 권장합니다.'
      }
    }
  },
  render: () => {
    return <DefaultPage />;
  }
};

export const Overflow: Story = {
  parameters: {
    docs: {
      description: {
        story: 'BottomSheet의 길이가 너무 길다면 자동으로 스크롤이 등장합니다.'
      }
    }
  },
  render: () => {
    return <OverflowPage />;
  }
};

export const Custom: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'BottomSheet 컴포넌트의 타입은 최대한 열려있으며, ref와 className은 물론이고 HTML 태그에 넣을 수 있는 모든 속성을 prop으로 전달할 수 있습니다.'
      }
    }
  },
  render: () => {
    return <CustomPage />;
  }
};

const DefaultPage = () => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <button
        className="btn btn-transition dark:btn-dark-point"
        onClick={toggle}
      >
        {theme === 'light' ? '화이트' : '다크'} BottomSheet 열기
      </button>
      <button
        className="btn btn-transition btn-success"
        onClick={handleToggleTheme}
      >
        테마 변경
      </button>
      <BottomSheet
        {...bottomSheetProps}
        theme={theme}
      >
        <h1 className="text-light-point dark:text-dark-point">하이하이</h1>
        <div>요건 내부의 내용이에요</div>
        <div>요건 내부의 내용이에요</div>
        <div>요건 내부의 내용이에요</div>
        <div>요건 내부의 내용이에요</div>
        <button
          className="btn btn-transition btn-danger"
          onClick={close}
        >
          닫기
        </button>
      </BottomSheet>
    </div>
  );
};

const OverflowPage = () => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();

  return (
    <>
      <button
        className="btn btn-transition btn-light-point"
        onClick={toggle}
      >
        엄청 긴거 열기
      </button>
      <BottomSheet
        {...bottomSheetProps}
        theme="dark"
      >
        <h1>내용이 엄청 길면 이렇게 스크롤이 생겨요</h1>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
        <button
          className="btn btn-transition btn-danger mt-2 w-full"
          onClick={close}
        >
          닫기
        </button>
      </BottomSheet>
    </>
  );
};

const CustomPage = () => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const cardRef = useRef(null);

  return (
    <>
      <button
        className="btn btn-transition btn-light-point"
        onClick={toggle}
      >
        커스텀 BottomSheet 열기
      </button>
      <BottomSheet
        {...bottomSheetProps}
        className="bg-green-400"
        ref={cardRef}
      >
        <div>스타일을 변경할 수 있어요</div>
        <div>ref 객체도 넘길 수 있어요</div>
        <button
          className="btn btn-transition btn-warning"
          onClick={() => alert(cardRef.current)}
        >
          ref 객체 출력
        </button>
        <button
          className="btn btn-transition btn-danger"
          onClick={close}
        >
          닫기
        </button>
      </BottomSheet>
    </>
  );
};
