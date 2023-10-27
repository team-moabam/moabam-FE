import { useRef, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const CONTAINER_ID = 'bottom-sheet';

export interface BottomSheetProps {
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

    onClose && onClose();
  };

  return createPortal(
    <AnimatePresence>
      {isShow && (
        <motion.div
          className={
            'absolute left-0 top-0 min-h-screen w-full bg-dark-gray/50'
          }
          ref={backgroundRef}
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute bottom-0 w-full">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById(CONTAINER_ID)!
  );
};

export default BottomSheet;
