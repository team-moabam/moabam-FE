import { useRef, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const CONTAINER_ID = 'bottom-sheet';

interface BottomSheetProps {
  isShow: boolean;
  onClose: VoidFunction;
}

const BottomSheet = ({
  children,
  isShow,
  onClose
}: PropsWithChildren<BottomSheetProps>) => {
  const innerRef = useRef<HTMLDivElement>(null);

  const handleClose: React.MouseEventHandler = (e) => {
    if (e.target !== innerRef.current) {
      return;
    }

    onClose?.();
  };

  return createPortal(
    <div
      className={`absolute left-0 top-0 min-h-screen w-full bg-neutral-200/30 ${
        !isShow && 'hidden'
      }`}
      ref={innerRef}
      onClick={handleClose}
    >
      <div className="absolute bottom-0 w-full bg-red-300">{children}</div>
    </div>,
    document.getElementById(CONTAINER_ID)!
  );
};

export default BottomSheet;
