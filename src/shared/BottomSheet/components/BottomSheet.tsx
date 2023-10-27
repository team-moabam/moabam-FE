import { useRef, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

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
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleClose: React.MouseEventHandler = (e) => {
    if (e.target !== backgroundRef.current) {
      return;
    }

    onClose?.();
  };

  return createPortal(
    <div
      className={clsx(
        'absolute left-0 top-0 min-h-screen w-full bg-neutral-200/30',
        { hidden: !isShow }
      )}
      ref={backgroundRef}
      onClick={handleClose}
    >
      <div className="absolute bottom-0 w-full">{children}</div>
    </div>,
    document.getElementById(CONTAINER_ID)!
  );
};

export default BottomSheet;
