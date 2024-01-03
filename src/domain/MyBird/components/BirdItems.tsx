import { useEffect, useContext } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from '@tanstack/react-query';
import itemOptions from '@/core/api/options/item';
import itemAPI from '@/core/api/functions/itemAPI';
import { Item } from '@/core/types/item';
import { useBottomSheet, BottomSheet } from '@/shared/BottomSheet';
import { Toast } from '@/shared/Toast';
import { MyBirdContext } from './MyBirdProvider';
import BirdItem from './BirdItem';
import ProductSheet from './ProductSheet';
import ItemLoader from './ItemLoader';

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
  const { mutate, isPending } = useMutation({
    mutationFn: itemAPI.select
  });
  const { selectItem, setSelectItem, productItem, setProductItem } =
    useContext(MyBirdContext);
  const { bottomSheetProps, open, close } = useBottomSheet();

  const handleSelectItem = (birdItem: Item) => {
    mutate(birdItem.id, {
      onSuccess: () => {
        Toast.show({
          message: '갈아입기 성공',
          status: 'confirm'
        });
        setSelectItem({ ...selectItem, [type]: birdItem });
        queryClient.invalidateQueries({
          queryKey: itemOptions.all(type).queryKey
        });
      },
      onError: (e) => {
        console.log(e);
        Toast.show({
          message: '뭔가 잘 못 되었습니다..',
          status: 'danger'
        });
      }
    });
  };

  const handleOpenSheet = (birdItem: Item) => {
    setProductItem(birdItem);
    open();
  };

  useEffect(() => {
    if (selectItem[type]) return;
    const defaultItem = purchasedItems.find(({ id }) => id === defaultItemId);
    setSelectItem({ ...selectItem, [type]: defaultItem });
  }, []);

  return (
    <>
      {isPending && <ItemLoader />}
      {selectItem[type] && (
        <>
          <div className="grid grid-cols-3 gap-3 p-3">
            {
              <>
                {purchasedItems.map((birdItem) => (
                  <div
                    key={birdItem.id}
                    className="mb-6"
                    onClick={() => {
                      !isPending && handleSelectItem(birdItem);
                    }}
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
