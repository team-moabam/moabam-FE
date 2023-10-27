import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const CONTAINER_ID = 'bottom-sheet';

interface BottomSheetProps {}

const BottomSheet = ({ children }: PropsWithChildren<BottomSheetProps>) => {
  return createPortal(
    <div className="absolute left-0 top-0 min-h-screen w-full bg-neutral-200">
      <div className="absolute bottom-0 w-full bg-red-300">{children}</div>
    </div>,
    document.getElementById(CONTAINER_ID)!
  );
};

export default BottomSheet;
