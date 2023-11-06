import { useRef, PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, HTMLMotionProps } from 'framer-motion';
import useTheme from '@/core/hooks/useTheme';
import { PORTALS } from '@/core/constants/portals';

export interface BottomSheetProps {
  isShow: boolean;
  close: VoidFunction;
}

const BottomSheet = forwardRef<
  HTMLElement,
  PropsWithChildren<HTMLMotionProps<'section'> & BottomSheetProps>
>(({ className, isShow, close, children, ...props }, ref) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

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
            'app-container z-bottomSheet bg-dark-gray/50',
            theme === 'dark' && 'dark'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={backgroundRef}
          onClick={handleClose}
        >
          <motion.section
            className={clsx(
              'absolute bottom-0 max-h-full w-full overflow-auto rounded-t-2xl bg-white p-2 text-black shadow-inner drop-shadow-2xl dark:bg-dark-main dark:text-white',
              className
            )}
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
    document.getElementById(PORTALS.bottomSheet)!
  );
});

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
