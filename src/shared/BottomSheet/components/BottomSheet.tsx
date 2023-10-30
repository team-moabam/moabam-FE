import { useRef, PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, HTMLMotionProps } from 'framer-motion';

const CONTAINER_ID = 'bottom-sheet';

export interface BottomSheetProps {
  theme: 'light' | 'dark'; // TODO: 다크모드에 대한 논의 이후에 수정될 가능성이 높은 코드에요.
  isShow: boolean;
  close: VoidFunction;
}

const BottomSheet = forwardRef<
  HTMLElement,
  PropsWithChildren<HTMLMotionProps<'section'> & BottomSheetProps>
>(({ children, className, theme, isShow, close, ...props }, ref) => {
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
          className={clsx(
            'absolute left-0 top-0 min-h-screen w-full overflow-hidden bg-dark-gray/50',
            theme === 'dark' && 'dark'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={backgroundRef}
          onClick={handleClose}
        >
          <motion.section
            className={`absolute bottom-0 max-h-full w-full overflow-auto rounded-t-2xl bg-white p-2 text-black dark:bg-dark-main dark:text-white ${className} shadow-inner drop-shadow-2xl`}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            exit={{ y: '100%' }}
            ref={ref}
            {...props}
          >
            {children}
          </motion.section>
        </motion.aside>
      )}
    </AnimatePresence>,
    document.getElementById(CONTAINER_ID)!
  );
});

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
