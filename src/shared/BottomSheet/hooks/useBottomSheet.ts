import { useState, useCallback } from 'react';
import { BottomSheetProps } from '../components/BottomSheet';

const useBottomSheet = () => {
  const [isShow, setIsShow] = useState(false);

  const open = useCallback(() => setIsShow(true), []);
  const close = useCallback(() => setIsShow(false), []);
  const toggle = useCallback(() => setIsShow((prev) => !prev), []);

  const bottomSheetProps: BottomSheetProps = { isShow, close };

  return { bottomSheetProps, isShow, open, close, toggle } as const;
};

export default useBottomSheet;
