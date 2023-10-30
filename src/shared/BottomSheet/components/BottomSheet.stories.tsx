import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useBottomSheet, BottomSheet } from '..';

const meta = {
  title: 'Shared/BottomSheet'
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <DefaultPage />;
  }
};

export const Overflow: Story = {
  render: () => {
    return <OverflowPage />;
  }
};

const DefaultPage = () => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const cardRef = useRef(null);

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
        onClick={() => console.log(cardRef.current)}
        ref={cardRef}
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
  const cardRef = useRef(null);

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
        onClick={() => console.log(cardRef.current)}
        theme="dark"
        ref={cardRef}
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
