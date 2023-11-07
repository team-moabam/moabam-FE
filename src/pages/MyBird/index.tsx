import { useState } from 'react';
import { BiSolidBugAlt } from 'react-icons/bi';
import { bugArray, bugColor } from './DUMMY_DATA';
import { BirdItemType } from './type';
import BirdItems from './components/BirdItems';
import { Header } from '@/shared/Header';
import { Tab, TabItem, TabThumbnail } from '@/shared/Tab';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';
import PurchaseBird from './components/PurchaseBird';

export interface selectBirdImgType {
  MORNING: string;
  NIGHT: string;
}

const MyBird = () => {
  const userLevel = 3; // 유저레벨 및 유저가 지금 어떤 새 장착했는지 정보 필요함
  const [wallet] = useState({
    morningBug: 4,
    nightBug: 300,
    goldenBug: 100
  });
  const { bottomSheetProps, open, close } = useBottomSheet();
  const [productBird, setProductBird] = useState<BirdItemType>();
  const [selectBirdImg, setSelectBirdImg] = useState<selectBirdImgType>({
    MORNING:
      'https://pbs.twimg.com/profile_images/1568998644673843202/CZgQSNk8_400x400.jpg',
    NIGHT:
      'https://pbs.twimg.com/profile_images/1568998644673843202/CZgQSNk8_400x400.jpg'
  });

  const handleOpenModal = (birdItem: BirdItemType) => {
    setProductBird(birdItem);
    open();
  };

  const purchaseBird = (
    id: string,
    image: string,
    type: string,
    purchaseType: string | undefined
  ) => {
    setSelectBirdImg({ ...selectBirdImg, [type]: image });
    close();
    console.log(id, purchaseType);
    alert(id + '상품 구매 요청! (지갑에서 차감되는건 다시 받아올 듯 )');
  };

  return (
    <div className="relative h-screen">
      <Header
        prev="/"
        className="absolute z-10 text-white"
      >
        <div className="flex gap-3 rounded-full border-2 border-dark-gray bg-[rgba(1,1,1,0.5)] px-3 py-1">
          {bugArray.map((bug) => (
            <div
              className={`flex items-center gap-2 ${bugColor[bug]}`}
              key={bug}
            >
              <BiSolidBugAlt />
              <h1>{wallet[bug]}</h1>
            </div>
          ))}
        </div>
      </Header>
      <Tab itemStyle="flex-1">
        {myBirdTabOption.thumbnail.map(({ type, bgImage }) => (
          <TabThumbnail key={type}>
            <div className="relative mb-5 aspect-video w-full overflow-hidden">
              <img
                src={bgImage}
                className="absolute  w-full object-cover"
              />
              <div className="absolute bottom-[15%] left-[15%] h-20 w-20">
                <img src={selectBirdImg[type]} />
              </div>
            </div>
          </TabThumbnail>
        ))}
        {myBirdTabOption.item.map(({ title, type }) => (
          <TabItem
            title={title}
            key={type}
          >
            <BirdItems
              itemType={type}
              selectBirdImg={selectBirdImg}
              setSelectBirdImg={setSelectBirdImg}
              handleOpenModal={handleOpenModal}
            />
          </TabItem>
        ))}
      </Tab>
      <BottomSheet {...bottomSheetProps}>
        {productBird && (
          <PurchaseBird
            purchaseBird={purchaseBird}
            productBird={productBird}
            userLevel={userLevel}
            wallet={wallet}
          />
        )}
      </BottomSheet>
    </div>
  );
};

export default MyBird;

interface MyBirdTabOption {
  thumbnail: {
    type: 'MORNING' | 'NIGHT';
    bgImage: string;
  }[];
  item: {
    type: 'MORNING' | 'NIGHT';
    title: string;
  }[];
}

const myBirdTabOption: MyBirdTabOption = {
  thumbnail: [
    {
      type: 'MORNING',
      bgImage:
        'https://i.pinimg.com/564x/36/da/67/36da67003994f6c6008c4915615f43be.jpg'
    },
    {
      type: 'NIGHT',
      bgImage:
        'https://i.pinimg.com/564x/1f/82/ee/1f82eeadee88c0acbc8c5364538824ed.jpg'
    }
  ],
  item: [
    {
      type: 'MORNING',
      title: '오목눈이'
    },
    {
      type: 'NIGHT',
      title: '부엉이'
    }
  ]
};
