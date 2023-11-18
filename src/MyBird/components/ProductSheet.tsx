import { useEffect, useState } from 'react';
import { BiSolidBugAlt } from 'react-icons/bi';
import { useContextSelector } from 'use-context-selector';
import { ItemType } from '../types/item';
import { BugsType } from '../types/bugs';
import { MyBirdContext } from '../contexts/MyBirdContext';

const ProductSheet = ({ close }: { close: () => void }) => {
  const userLevel = useContextSelector(MyBirdContext, (state) => state.level);
  const productItem = useContextSelector(
    MyBirdContext,
    (state) => state.productItem
  );
  const bugs = useContextSelector(MyBirdContext, (state) => state.bugs);
  const selectItem = useContextSelector(
    MyBirdContext,
    (state) => state.selectItem
  );
  const setSelectItem = useContextSelector(
    MyBirdContext,
    (state) => state.setSelectItem
  );
  const { bugPrice, goldenBugPrice, level, name, type } =
    productItem as ItemType;
  const { morningBug, nightBug, goldenBug } = bugs as BugsType;
  const [purchaseOption, setPurchaseOption] = useState<string>();
  const isLevelProduct = bugPrice === 0 && goldenBugPrice === 0;
  const isLevelEnough = userLevel >= level;

  useEffect(() => {
    console.log('ProductSheet');
  }, []);

  const productOptions = [
    {
      purchaseType: 'normal',
      color: type === 'MORNING' ? 'text-light-point' : 'text-dark-point',
      price: bugPrice,
      buyResult: (type === 'MORNING' ? morningBug : nightBug) - bugPrice
    },
    {
      purchaseType: 'golden',
      color: 'text-warning',
      price: goldenBugPrice,
      buyResult: goldenBug - goldenBugPrice
    }
  ];

  const purchaseBird = (productItem: ItemType) => {
    setSelectItem({ ...selectItem, [type]: productItem });
    close();
  };

  return (
    <>
      <div className="p-3">
        {isLevelProduct ? (
          <>
            <div className="mb-6 mt-3 text-xl">
              <h1>현재 나의 레벨 {userLevel}</h1>
              <h1>
                {isLevelEnough
                  ? '구매 가능합니다!'
                  : `앞으로 ${level - userLevel}레벨 더 필요해요!`}
              </h1>
            </div>
            <button
              className={`btn w-full ${
                isLevelEnough
                  ? 'btn-light-point dark:btn-dark-point'
                  : 'btn-disabled'
              }`}
              disabled={!isLevelEnough}
              onClick={() => {
                if (productItem) purchaseBird(productItem);
              }}
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
                onClick={() => {
                  if (buyResult < 0) return;
                  setPurchaseOption(purchaseType);
                }}
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
              onClick={() => {
                if (productItem) purchaseBird(productItem);
              }}
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