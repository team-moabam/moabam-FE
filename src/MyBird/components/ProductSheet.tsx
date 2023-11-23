import { useState } from 'react';
import {
  useSuspenseQueries,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';
import { BiSolidBugAlt } from 'react-icons/bi';
import { useContextSelector } from 'use-context-selector';
import itemAPI from '@/core/api/functions/itemAPI';
import userOptions from '@/core/api/options/user';
import { MyBirdContext } from '../contexts/myBirdContext';
import { ItemType, ItemsType } from '@/core/types/item';
import { MyUserType } from '@/core/types/User';

interface ProductSheetProps {
  close: () => void;
}

const ProductSheet = ({ close }: ProductSheetProps) => {
  const [
    {
      data: { morning_bug, night_bug, golden_bug, level: userLevel }
    }
  ] = useSuspenseQueries({
    queries: [
      {
        ...userOptions.user()
      }
    ]
  });
  const { productItem, selectItem, setSelectItem } = useContextSelector(
    MyBirdContext,
    (state) => state
  );
  const mutation = useMutation({
    mutationFn: itemAPI.purchase
  });
  const queryClient = useQueryClient();
  const { bugPrice, goldenBugPrice, level, name, type } =
    productItem as ItemType;
  const [purchaseOption, setPurchaseOption] = useState<string>();
  const isLevelEnough = userLevel >= level;

  const productOptions = [
    {
      purchaseType: 'normal',
      color: type === 'MORNING' ? 'text-light-point' : 'text-dark-point',
      price: bugPrice,
      buyResult: (type === 'MORNING' ? morning_bug : night_bug) - bugPrice
    },
    {
      purchaseType: 'golden',
      color: 'text-warning',
      price: goldenBugPrice,
      buyResult: golden_bug - goldenBugPrice
    }
  ];

  const purchaseBird = (id: number | undefined) => {
    if (!purchaseOption || !id) return;
    mutation.mutate(
      { itemId: id, bugType: purchaseOption },
      {
        onSuccess: () => {
          setSelectItem({ ...selectItem, [type]: productItem });
          queryClient.setQueryData(['item'], (oldData: ItemsType) => {
            return {
              ...oldData,
              defaultItemId: productItem?.id,
              notPurchasedItems: oldData.notPurchasedItems.filter(
                ({ id }) => id !== productItem?.id
              ),
              purchasedItems: [...oldData.purchasedItems, productItem]
            };
          });
          queryClient.setQueryData(['user'], (oldData: MyUserType) => {
            const PayType = purchaseOption === 'golden' ? 'GOLDEN' : type;
            const { morning_bug, night_bug, golden_bug } = oldData;
            return {
              ...oldData,
              morning_bug: morning_bug - (PayType === 'MORNING' ? bugPrice : 0),
              night_bug: night_bug - (PayType === 'NIGHT' ? bugPrice : 0),
              golden_bug:
                golden_bug - (PayType === 'GOLDEN' ? goldenBugPrice : 0)
            };
          });
          queryClient.invalidateQueries({ queryKey: ['user', 'item'] });
          close();
        },
        onError: (e) => {
          console.log('무언가 잘못 되었습니다..' + e);
        }
      }
    );
  };

  const handleSetPurchaseOption = (buyResult: number, purchaseType: string) => {
    if (buyResult < 0) return;
    setPurchaseOption(purchaseType);
  };

  return (
    <>
      <div className="p-3">
        {!isLevelEnough ? (
          <>
            <div className="mb-6 mt-3 text-xl">
              <h1>현재 나의 레벨 {userLevel}</h1>
              <h1>{`앞으로 ${level - userLevel}레벨 더 필요해요!`}</h1>
            </div>
            <button
              className="btn btn-disabled w-full"
              disabled={true}
            >
              구매
            </button>
          </>
        ) : (
          <>
            <h1 className="mb-6 mt-3 text-xl">
              어떻게 <br /> <span className="font-extrabold">{name}을(를)</span>{' '}
              <br /> 구매하시겠어요?
            </h1>
            {productOptions.map(({ buyResult, color, price, purchaseType }) => (
              <div
                key={purchaseType}
                className={`mb-3 flex items-center gap-3 rounded-2xl border-2 border-dark-gray bg-light-main p-2 px-3 text-sm transition-all dark:bg-dark-main ${
                  purchaseOption === purchaseType &&
                  'border-light-point dark:border-dark-point'
                }`}
                onClick={() => handleSetPurchaseOption(buyResult, purchaseType)}
              >
                <div className={`flex grow items-center gap-2 ${color}`}>
                  <BiSolidBugAlt size={16} />
                  <h1 className="font-extrabold">{price}</h1>
                </div>
                {buyResult < 0 ? (
                  <h1 className="text-danger">벌레가 부족해요..</h1>
                ) : (
                  <>
                    <h1 className="text-sm">구매 후</h1>
                    <h1 className="font-extrabold">{buyResult + ' 남음'}</h1>
                  </>
                )}
              </div>
            ))}
            <button
              className={`btn  w-full font-extrabold ${
                !purchaseOption
                  ? 'btn-disabled'
                  : 'btn-light-point dark:btn-dark-point'
              }`}
              disabled={!purchaseOption}
              onClick={() => purchaseBird(productItem?.id)}
            >
              구매
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ProductSheet;
