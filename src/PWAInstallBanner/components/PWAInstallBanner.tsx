import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/core/hooks';
import usePWAInstallBanner from '../hooks/usePWAInstallBanner';
import IconButton from './IconButton';

interface PWAInstallBannerProps {
  bannerStyle?: string;
}

const PWAInstallBanner = ({ bannerStyle }: PWAInstallBannerProps) => {
  const { isShow, handleInstall, handleClose } = usePWAInstallBanner();
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isShow && (
        <motion.article
          className="flex w-full justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={twMerge(
              'h-16 w-[90%]',
              'rounded-lg font-bold text-white shadow-lg text-center',
              'flex items-center justify-center gap-2',
              'bg-gradient-to-r from-light-point to-light-point-hover',
              'dark:from-dark-point dark:to-dark-point-hover',
              bannerStyle
            )}
          >
            <img
              className="ml-4"
              src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
              width={50}
              height={50}
            />
            <p className="grow break-keep">
              앱으로 <b>설치</b>할 수도 있어요
            </p>
            <section className="me-4 flex gap-2">
              <IconButton
                icon="MdFileDownload"
                onClick={handleInstall}
              />
              <IconButton
                icon="CgClose"
                onClick={handleClose}
              />
            </section>
          </div>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallBanner;
