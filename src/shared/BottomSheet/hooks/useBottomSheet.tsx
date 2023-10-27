import { useState, useMemo, PropsWithChildren } from 'react';
import BottomSheet from '../components/BottomSheet';

const useBottomSheet = () => {
  const [isShow, setIsShow] = useState(false);

  const BottomSheetComponent = useMemo(
    () =>
      ({ children }: PropsWithChildren) => {
        return <BottomSheet isShow={isShow}>{children}</BottomSheet>;
      },
    [isShow]
  );

  return { isShow, setIsShow, BottomSheet: BottomSheetComponent };
};

export default useBottomSheet;
