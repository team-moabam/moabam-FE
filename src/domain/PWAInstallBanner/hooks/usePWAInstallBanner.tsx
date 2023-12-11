import {
  useState,
  createContext,
  useContext,
  useCallback,
  useRef,
  useEffect
} from 'react';

const PWAInstallBannerContext = createContext({
  isShow: false,
  handleInstall: () => {},
  handleClose: () => {}
});

export const PWAInstallBannerProvider = ({
  children
}: React.PropsWithChildren) => {
  const deferredPrompt = useRef<any>(null);
  const [isShow, setIsShow] = useState(false);

  const handleInstall = useCallback(() => deferredPrompt.current?.prompt(), []);
  const handleClose = useCallback(() => setIsShow(false), []);

  const handleBeforeInstallPrompt = useCallback((e: Event) => {
    e.preventDefault();
    deferredPrompt.current = e;
    setIsShow(true);
  }, []);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleClose);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
      window.removeEventListener('appinstalled', handleClose);
    };
  }, []);

  return (
    <PWAInstallBannerContext.Provider
      value={{ isShow, handleInstall, handleClose }}
    >
      {children}
    </PWAInstallBannerContext.Provider>
  );
};

const usePWAInstallBanner = () => {
  return useContext(PWAInstallBannerContext);
};

export default usePWAInstallBanner;
