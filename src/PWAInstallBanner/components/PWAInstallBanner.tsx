import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/core/hooks';
import usePWAInstallBanner from '../hooks/usePWAInstallBanner';
import { Icon } from '@/shared/Icon';

const PWAInstallBanner = () => {
  const { isShow, handleInstall, handleClose } = usePWAInstallBanner();
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className="flex w-full justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={clsx(
              'absolute bottom-36 z-pwaInstallBanner h-16 w-[90%]',
              'rounded-lg font-bold text-white shadow-lg',
              'flex items-center justify-center gap-2',
              'bg-gradient-to-r from-light-point to-light-point-hover',
              'dark:from-dark-point dark:to-dark-point-hover'
            )}
          >
            <img
              className="ml-4"
              src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
              width={50}
              height={50}
            />
            <p className="grow">
              앱으로 <b>설치</b>할 수도 있어요
            </p>
            <section className="me-4 flex gap-2">
              <div
                className={iconButtonStyle}
                onClick={handleInstall}
              >
                <Icon
                  icon="MdFileDownload"
                  size="lg"
                />
              </div>
              <div
                className={iconButtonStyle}
                onClick={handleClose}
              >
                <Icon
                  icon="CgClose"
                  size="lg"
                />
              </div>
            </section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallBanner;

const iconButtonStyle =
  'flex flex-col items-center justify-center cursor-pointer rounded-2xl p-2 bg-white text-light-point hover:bg-light-main hover:text-light-point-hover dark:text-dark-point dark:hover:text-dark-point-hover';
