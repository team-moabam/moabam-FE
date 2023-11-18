import { useEffect } from 'react';
import { useContextSelector } from 'use-context-selector';
import useDebounce from '@/core/hooks/useDebounce';
import { birdItems } from '../mocks/birdItems';
import { MyBirdContext } from '../contexts/myBirdContext';
import BirdItem from './BirdItem';
import ProductSheet from './ProductSheet';
import { useBottomSheet, BottomSheet } from '@/shared/BottomSheet';

interface BirdItemsProps {
  itemType: 'MORNING' | 'NIGHT';
}

const BirdItems = ({ itemType }: BirdItemsProps) => {
  // 여기서 퀴리로 받을듯
  const { purchasedItems, notPurchasedItems, defaultItemId } =
    birdItems[itemType];

  const { selectItem, productItem, setSelectItem, setProductItem } =
    useContextSelector(MyBirdContext, (state) => state);

  const { bottomSheetProps, open, close } = useBottomSheet();

  const fetchSelectItem = useDebounce((id: string) => {
    console.log(id + '로 변경 요청'); // 스킨 적용 패칭
  }, 1000);

  useEffect(() => {
    console.log('BirdItems');
    if (selectItem[itemType]) return;
    const defaultItem = purchasedItems.find(({ id }) => id === defaultItemId);
    setSelectItem({ ...selectItem, [itemType]: defaultItem });
  }, []);

  return (
    <>
      {selectItem[itemType] && (
        <>
          <div className="grid grid-cols-3 gap-3 p-3">
            {
              <>
                {purchasedItems.map((birdItem) => (
                  <div
                    key={birdItem.id}
                    className="mb-6"
                    onClick={() => {
                      setSelectItem({ ...selectItem, [itemType]: birdItem });
                      fetchSelectItem(birdItem.id);
                    }}
                  >
                    <BirdItem
                      isSelect={selectItem[itemType]?.id === birdItem.id}
                      birdItem={birdItem}
                    />
                  </div>
                ))}
                {notPurchasedItems.map((birdItem) => (
                  <div
                    key={birdItem.id}
                    onClick={() => {
                      setProductItem(birdItem);
                      open();
                    }}
                    className="mb-3"
                  >
                    <BirdItem
                      isLock={true}
                      birdItem={birdItem}
                    />
                  </div>
                ))}
              </>
            }
          </div>
          <BottomSheet {...bottomSheetProps}>
            {productItem && <ProductSheet close={close} />}
          </BottomSheet>
        </>
      )}
    </>
  );
};

export default BirdItems;
