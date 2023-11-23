import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/shared/Icon';

const PWAInstallBanner = () => {
  const deferredPrompt = useRef<any>(null);
  const [isShow, setIsShow] = useState(false);

  const handleInstall = () => {
    deferredPrompt.current.prompt();
  };

  const handleClose = () => {
    setIsShow(false);
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setIsShow(true);
      console.log('beforeinstallprompt Event fired', e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
  }, []);

  useEffect(() => {
    const handleAppInstalled = () => {
      setIsShow(false);
      console.log('appinstalled Event fired');
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => window.removeEventListener('appinstalled', handleAppInstalled);
  }, []);

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
              'rounded-lg font-bold text-black shadow-lg dark:text-white',
              'flex items-center justify-center gap-2',
              'bg-gradient-to-r from-light-point to-light-point-hover'
            )}
          >
            <img
              className="ml-4"
              src="/logo.png"
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
  'flex flex-col items-center justify-center cursor-pointer rounded-2xl p-2 bg-white text-light-point hover:text-light-point-hover hover:bg-light-main';
