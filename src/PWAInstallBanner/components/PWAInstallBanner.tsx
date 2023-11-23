import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { PORTALS } from '@/core/constants/portals';
import { useTheme } from '@/core/hooks';

const PWAInstallBanner = () => {
  const deferredPrompt = useRef<any>(null);
  const { theme } = useTheme();

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

  return createPortal(
    <div
      className={clsx(
        'app-container z-pwaInstallBanner',
        theme === 'dark' && 'dark'
      )}
    >
      <div className="absolute bottom-20 flex h-16 w-full items-center justify-center gap-2 bg-light-point font-bold text-black dark:text-white">
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
          <button onClick={handleInstall}>설치</button>
          <button>닫기</button>
        </section>
      </div>
    </div>,
    document.getElementById(PORTALS.bottomSheet)!
  );
};

export default PWAInstallBanner;
