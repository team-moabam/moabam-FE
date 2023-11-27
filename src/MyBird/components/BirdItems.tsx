import { useEffect, useContext } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from '@tanstack/react-query';
import useDebounce from '@/core/hooks/useDebounce';
import itemOptions from '@/core/api/options/item';
import itemAPI from '@/core/api/functions/itemAPI';
import { MyBirdContext } from './MyBirdProvider';
import BirdItem from './BirdItem';
import ProductSheet from './ProductSheet';
import { useBottomSheet, BottomSheet } from '@/shared/BottomSheet';
import { Item } from '@/core/types/item';

interface BirdItemsProps {
  type: 'MORNING' | 'NIGHT';
}

const BirdItems = ({ type }: BirdItemsProps) => {
  const queryClient = useQueryClient();
  const {
    data: { defaultItemId, notPurchasedItems, purchasedItems }
  } = useSuspenseQuery({
    ...itemOptions.all(type)
  });
  const { mutate } = useMutation({
    mutationFn: itemAPI.select
  });
  const { selectItem, setSelectItem, productItem, setProductItem } =
    useContext(MyBirdContext);
  const { bottomSheetProps, open, close } = useBottomSheet();

  const handleSelectItem = (birdItem: Item) => {
    setSelectItem({ ...selectItem, [type]: birdItem });
    fetchSelectItem(birdItem.id);
  };

  const handleOpenSheet = (birdItem: Item) => {
    setProductItem(birdItem);
    open();
  };

  const fetchSelectItem = useDebounce((id: number) => {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['item', type] });
      }
    });
  }, 1000);

  useEffect(() => {
    if (selectItem[type]) return;
    const defaultItem = purchasedItems.find(({ id }) => id === defaultItemId);
    setSelectItem({ ...selectItem, [type]: defaultItem });
  }, []);

  return (
    <>
      {selectItem[type] && (
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
                      isSelect={selectItem[type]?.id === birdItem.id}
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
