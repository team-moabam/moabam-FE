import { useState, useCallback, useMemo, PropsWithChildren } from 'react';
import BottomSheet from '../components/BottomSheet';

const useBottomSheet = () => {
  const [isShow, setIsShow] = useState(false);

  const open = useCallback(() => setIsShow(true), []);
  const close = useCallback(() => setIsShow(false), []);
  const toggle = useCallback(() => setIsShow((prev) => !prev), []);

  const BottomSheetComponent = useMemo(
    () =>
      ({ children }: PropsWithChildren) => {
        return (
          <BottomSheet
            isShow={isShow}
            onClose={close}
          >
            {children}
          </BottomSheet>
        );
      },
    [isShow, close]
  );

  return { isShow, open, close, toggle, BottomSheet: BottomSheetComponent };
};

export default useBottomSheet;
