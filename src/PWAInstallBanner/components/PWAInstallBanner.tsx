import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/Icon';

const PWAInstallBanner = () => {
  const deferredPrompt = useRef<any>(null);
  const [show, setShow] = useState(false);

  const handleInstall = async () => {
    deferredPrompt.current.prompt();

    const { outcome } = await deferredPrompt.current.userChoice;

    console.log(`User response to the install prompt: ${outcome}`);
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e;
      console.log(e);
      console.log(`'beforeinstallprompt' event was fired.`);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
  }, []);

  return (
    <div className="flex w-full justify-center">
      <div
        className={clsx(
          'absolute bottom-20 z-pwaInstallBanner h-16 w-[90%]',
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
          <div className={iconButtonStyle}>
            <Icon
              icon="CgClose"
              size="lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PWAInstallBanner;

const iconButtonStyle =
  'flex flex-col items-center justify-center cursor-pointer rounded-2xl p-2 bg-white text-light-point hover:text-light-point-hover hover:bg-light-main';
