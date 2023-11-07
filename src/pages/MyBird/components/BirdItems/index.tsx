import { useDebounce } from '@/core/hooks';
import { selectBirdImgType } from '../..';
import BirdItem from '../BirdItem';
import { birdItems } from '../../DUMMY_DATA';
import { BirdItemType } from '../../type';

interface BirdItemsProps {
  itemType: 'MORNING' | 'NIGHT';
  selectBirdImg: selectBirdImgType;
  setSelectBirdImg: React.Dispatch<React.SetStateAction<selectBirdImgType>>;
  handleOpenModal: (birdItem: BirdItemType) => void;
}

const BirdItems = ({
  itemType,
  selectBirdImg,
  setSelectBirdImg,
  handleOpenModal
}: BirdItemsProps) => {
  // 여기서 퀴리로 받을듯
  const { purchasedItems, notPurchasedItems } = birdItems[itemType];

  const fetchSelectItem = useDebounce((id: string) => {
    console.log(id + '로 변경 요청'); // 스킨 적용 패칭
  }, 1000);

  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {purchasedItems.map((birdItem) => (
        <div
          key={birdItem.id}
          className="mb-6"
          onClick={() => {
            setSelectBirdImg({ ...selectBirdImg, [itemType]: birdItem.image });
            fetchSelectItem(birdItem.id);
          }}
        >
          <BirdItem
            isSelect={selectBirdImg[itemType] === birdItem.image}
            birdItem={birdItem}
          />
        </div>
      ))}
      {notPurchasedItems.map((birdItem) => (
        <div
          key={birdItem.id}
          onClick={() => handleOpenModal(birdItem)}
          className="mb-3"
        >
          <BirdItem
            isLock={true}
            birdItem={birdItem}
          />
        </div>
      ))}
    </div>
  );
};

export default BirdItems;
