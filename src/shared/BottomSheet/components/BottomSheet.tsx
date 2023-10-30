import { useRef, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, HTMLMotionProps } from 'framer-motion';

const CONTAINER_ID = 'bottom-sheet';

export interface BottomSheetProps {
  isShow: boolean;
  close: VoidFunction;
}

const BottomSheet = ({
  children,
  className,
  isShow,
  close,
  ...props
}: PropsWithChildren<HTMLMotionProps<'section'> & BottomSheetProps>) => {
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
            'dark absolute left-0 top-0 min-h-screen w-full bg-dark-gray/50'
          }
          ref={backgroundRef}
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.section
            className={`absolute bottom-0 w-full overflow-hidden rounded-2xl bg-white p-2 text-black dark:bg-dark-main dark:text-white ${className}`}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            {...props}
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
