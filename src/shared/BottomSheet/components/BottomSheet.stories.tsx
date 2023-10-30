import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useBottomSheet, BottomSheet } from '..';

const meta = {
  title: 'Shared/BottomSheet'
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

// const Page = () => {
//   const { bottomSheetProps, toggle, close } = useBottomSheet();
//   const cardRef = useRef(null);

//   return (
//     <>
//       <button onClick={toggle}>BottomSheet 열기</button>
//       <BottomSheet
//         {...bottomSheetProps}
//         onClick={() => console.log(cardRef.current)}
//         ref={cardRef}
//       >
//         <h1 className="text-light-point dark:text-red-500">하이하이</h1>
//         <div>요건 내부의 내용이에요</div>
//         <div>요건 내부의 내용이에요</div>
//         <div>요건 내부의 내용이에요</div>
//         <div>요건 내부의 내용이에요</div>
//         <button onClick={close}>이거 누르면 BottomSheet를 닫아요</button>
//       </BottomSheet>
//     </>
//   );
// };

const OverflowPage = () => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const cardRef = useRef(null);

  return (
    <>
      <button onClick={toggle}>BottomSheet 열기</button>
      <BottomSheet
        {...bottomSheetProps}
        onClick={() => console.log(cardRef.current)}
        ref={cardRef}
      >
        <h1>내용이 엄청 길면 이렇게 스크롤이 생겨요</h1>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
        <button onClick={close}>이거 누르면 BottomSheet를 닫아요</button>
      </BottomSheet>
    </>
  );
};

export const Default: Story = {
  render: () => {
    return <OverflowPage />;
  }
};
