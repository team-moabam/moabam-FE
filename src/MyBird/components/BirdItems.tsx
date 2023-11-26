import { useEffect } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from '@tanstack/react-query';
import { useContextSelector } from 'use-context-selector';
import useDebounce from '@/core/hooks/useDebounce';
import itemOptions from '@/core/api/options/item';
import itemAPI from '@/core/api/functions/itemAPI';
import { MyBirdContext } from '../contexts/myBirdContext';
import BirdItem from './BirdItem';
import ProductSheet from './ProductSheet';
import { useBottomSheet, BottomSheet } from '@/shared/BottomSheet';
import { ItemType } from '@/core/types/item';

interface BirdItemsProps {
  itemType: 'MORNING' | 'NIGHT';
}

const BirdItems = ({ itemType }: BirdItemsProps) => {
  const queryClient = useQueryClient();
  const {
    data: { defaultItemId, notPurchasedItems, purchasedItems },
    isSuccess
  } = useSuspenseQuery({
    ...itemOptions.all(itemType)
  });
  const mutation = useMutation({
    mutationFn: itemAPI.select
  });

  const { selectItem, productItem, setSelectItem, setProductItem } =
    useContextSelector(MyBirdContext, (state) => state);
  const { bottomSheetProps, open, close } = useBottomSheet();

  const handleSelectItem = (birdItem: ItemType) => {
    setSelectItem({ ...selectItem, [itemType]: birdItem });
    fetchSelectItem(birdItem.id);
  };

  const handleOpenSheet = (birdItem: ItemType) => {
    setProductItem(birdItem);
    open();
  };

  const fetchSelectItem = useDebounce((id: number) => {
    mutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user', 'item'] });
      }
    });
  }, 1000);

  useEffect(() => {
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
                    onClick={() => handleSelectItem(birdItem)}
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
                    onClick={() => handleOpenSheet(birdItem)}
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
