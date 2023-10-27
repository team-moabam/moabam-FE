import { useRef, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const CONTAINER_ID = 'bottom-sheet';

export interface BottomSheetProps {
  isShow: boolean;
  close: VoidFunction;
}

const BottomSheet = ({
  children,
  isShow,
  close
}: PropsWithChildren<BottomSheetProps>) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleClose: React.MouseEventHandler = (e) => {
    if (e.target !== backgroundRef.current) {
      return;
    }

    close && close();
  };

  return createPortal(
    <AnimatePresence>
      {isShow && (
        <motion.aside
          className={
            'absolute left-0 top-0 min-h-screen w-full bg-dark-gray/50'
          }
          ref={backgroundRef}
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.section
            className="absolute bottom-0 w-full"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
          >
            {children}
          </motion.section>
        </motion.aside>
      )}
    </AnimatePresence>,
    document.getElementById(CONTAINER_ID)!
  );
};

export default BottomSheet;
