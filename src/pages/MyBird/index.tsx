import { useState } from 'react';
import { BiSolidBugAlt } from 'react-icons/bi';
import { bugArray, wallet, bugColor, BirdItemType } from './DUMMY_DATA';
import BirdItems from './components/BirdItems';
import { Header } from '@/shared/Header';
import { Tab, TabItem, TabThumbnail } from '@/shared/Tab';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';

export interface selectBirdImgType {
  MORNING: string;
  NIGHT: string;
}

const MyBird = () => {
  const { bottomSheetProps, open } = useBottomSheet();
  const [modalBird, setModalBird] = useState<BirdItemType>();
  const [selectBirdImg, setSelectBirdImg] = useState<selectBirdImgType>({
    MORNING:
      'https://pbs.twimg.com/profile_images/1568998644673843202/CZgQSNk8_400x400.jpg',
    NIGHT:
      'https://pbs.twimg.com/profile_images/1568998644673843202/CZgQSNk8_400x400.jpg'
  });

  const handleModal = (birdItem: BirdItemType) => {
    console.log(birdItem);
    setModalBird(modalBird);
    open();
  };

  return (
    <div className="relative h-screen">
      <div className="absolute z-50 h-full w-full bg-[rgba(1,1,1,0.5)]">
        <div className="min-h-[20px] w-full bg-white "></div>
      </div>
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
            <div className="relative mb-5 aspect-video w-full overflow-hidden bg-slate-500">
              <img
                src={bgImage}
                className="absolute w-full object-cover"
              />
              <div className="absolute left-1/3 h-48 w-48 bg-red-100">
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
              modalOpen={handleModal}
            />
          </TabItem>
        ))}
      </Tab>
      <BottomSheet {...bottomSheetProps}>
        {modalBird && (
          <div className="p-3">
            <h1 className="my-3 text-xl">
              어떻게 <br /> {modalBird.name}를 <br /> 구매하시겠어요?
            </h1>
          </div>
        )}
        <div className="p-3">
          <h1 className="my-3 text-xl">
            어떻게 <br /> 1를 <br /> 구매하시겠어요?
          </h1>
        </div>
      </BottomSheet>
    </div>
  );
};

export default MyBird;
// export interface BirdItemType {
//   id: string;
//   type: string;
//   category: string;
//   name: string;
//   image: string;
//   level: number;
//   bugPrice: number;
//   goldenBugPrice: number;
// }

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
        'https://i.pinimg.com/564x/1f/82/ee/1f82eeadee88c0acbc8c5364538824ed.jpg'
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
