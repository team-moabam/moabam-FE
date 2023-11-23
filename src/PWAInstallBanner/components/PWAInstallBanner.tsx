import { useEffect, useRef } from 'react';
import clsx from 'clsx';

const PWAInstallBanner = () => {
  const deferredPrompt = useRef<any>(null);

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
          <button onClick={handleInstall}>설치</button>
          <button>닫기</button>
        </section>
      </div>
    </div>
  );
};

export default PWAInstallBanner;
