import { useEffect } from 'react';
import { useSuspenseQueries, useMutation } from '@tanstack/react-query';
import { useContextSelector } from 'use-context-selector';
import useDebounce from '@/core/hooks/useDebounce';
import itemOptions from '@/core/api/options/item';
import itemAPI from '@/core/api/functions/itemAPI';
import { MyBirdContext } from '../contexts/myBirdContext';
import BirdItem from './BirdItem';
import ProductSheet from './ProductSheet';
import { useBottomSheet, BottomSheet } from '@/shared/BottomSheet';
import { ItemsType } from '@/core/types/MyBird';

interface BirdItemsProps {
  itemType: 'MORNING' | 'NIGHT';
}

const BirdItems = ({ itemType }: BirdItemsProps) => {
  const [
    {
      data: { defaultItemId, notPurchasedItems, purchasedItems }
    }
  ] = useSuspenseQueries({
    queries: [
      {
        ...itemOptions.all(itemType),
        select: (items: ItemsType) => items[itemType]
      }
    ]
  });
  const mutation = useMutation({
    mutationFn: itemAPI.select
  });
  const { selectItem, productItem, setSelectItem, setProductItem } =
    useContextSelector(MyBirdContext, (state) => state);
  const { bottomSheetProps, open, close } = useBottomSheet();

  const fetchSelectItem = useDebounce((id: string) => {
    mutation.mutate(id, {
      onSuccess: (data) => {
        console.log('토스트로 성공 보여주기?');
      }
    });
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
