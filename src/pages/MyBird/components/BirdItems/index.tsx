import { useDebounce } from '@/core/hooks';
import { selectBirdImgType } from '../..';
import BirdItem from '../BirdItem';
import { birdItems, BirdItemType } from '../../DUMMY_DATA';

interface BirdItemsProps {
  itemType: 'MORNING' | 'NIGHT';
  selectBirdImg: selectBirdImgType;
  setSelectBirdImg: React.Dispatch<React.SetStateAction<selectBirdImgType>>;
  modalOpen: (birdItem: BirdItemType) => void;
}

const BirdItems = ({
  itemType,
  selectBirdImg,
  setSelectBirdImg,
  modalOpen
}: BirdItemsProps) => {
  // 여기서 퀴리로 받을듯
  const { purchasedItems, notPurchasedItems } = birdItems[itemType];

  const fetchSelectItem = useDebounce((id: string) => {
    console.log(id + '로 변경 요청'); // 스킨 적용 패칭
  }, 1000);

  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {purchasedItems.map(({ id, name, image }) => (
        <div
          key={id}
          className="mb-6"
          onClick={() => {
            setSelectBirdImg({ ...selectBirdImg, [itemType]: image });
            fetchSelectItem(id);
          }}
        >
          <BirdItem
            isLock={false}
            name={name}
            image={image}
            isSelect={selectBirdImg[itemType] === image}
          />
        </div>
      ))}
      {notPurchasedItems.map((birdItem) => (
        <div
          key={birdItem.id}
          onClick={() => modalOpen(birdItem)}
          className="mb-3"
        >
          <BirdItem
            isLock={true}
            name={birdItem.name}
            image={birdItem.image}
            isSelect={selectBirdImg[itemType] === birdItem.image}
          />
        </div>
      ))}
    </div>
  );
};

export default BirdItems;
