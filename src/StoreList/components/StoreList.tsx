import { useState } from 'react';
import { BiSolidBugAlt, BiChevronRight } from 'react-icons/bi';
import { data } from '../mocks/products';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';
import { Product } from '../mocks/types/product';

const StoreList = () => {
  const { products } = data;
  const { bottomSheetProps, open, close } = useBottomSheet();
  const [selectProduct, setSelectProduct] = useState<Product>();

  const handleBuyProduct = () => {
    close();
    console.log('삼');
  };

  return (
    <>
      <ul className="flex flex-col gap-2 p-5">
        {products.map((product) => (
          <li
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-light-sub p-3 font-extrabold dark:bg-dark-sub"
            key={product.id}
            onClick={() => {
              open();
              setSelectProduct(product);
            }}
          >
            <div className="text-lg text-warning">
              <BiSolidBugAlt />
            </div>
            <h1 className="grow">{product.name}</h1>
            <div className="flex items-center gap-1 text-xl font-extrabold text-light-point dark:text-dark-point">
              <span>₩ </span>
              <h1>{product.price}</h1>
              <div className="text-3xl">
                <BiChevronRight />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <BottomSheet {...bottomSheetProps}>
        {selectProduct && (
          <div className="p-3">
            <h1 className="my-5 text-xl font-extrabold">
              황금벌레 {selectProduct.name} <br /> 상품을 구매하시겠어요?
            </h1>
            <h1 className="my-1 text-dark-gray">쿠폰</h1>
            <select className="w-full rounded-md border-2 p-1">
              <option value="10원할인">10원 할인 쿠폰</option>
            </select>
            <div className="mt-8 flex flex-col gap-2 text-dark-gray">
              <div className="flex">
                <h1 className="grow">상품가격</h1>
                <h1>7000원</h1>
              </div>
              <div className="flex">
                <h1 className="grow">할인</h1>
                <h1>0원</h1>
              </div>
              <hr />
              <div className="flex font-extrabold text-light-point dark:bg-dark-point">
                <h1 className="grow">총 결제 금액</h1>
                <h1>7000원</h1>
              </div>
              <button
                className="btn btn-light-point dark:btn-dark-point mt-2"
                onClick={() => handleBuyProduct()}
              >
                구매
              </button>
            </div>
          </div>
        )}
      </BottomSheet>
    </>
  );
};

export default StoreList;
