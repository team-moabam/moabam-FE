import { useEffect } from 'react';
import { useContextSelector } from 'use-context-selector';
import { MyBirdContext } from '../contexts/MyBirdContext';
import BirdItems from './BirdItems';
import { Tab, TabItem, TabThumbnail } from '@/shared/Tab';

const MyBirdTaps = () => {
  const selectItem = useContextSelector(
    MyBirdContext,
    (state) => state.selectItem
  );

  useEffect(() => {
    console.log('MyBirdTaps');
  });

  return (
    <>
      <Tab itemStyle="flex-1">
        {selectItem &&
          myBirdTabOption.thumbnail.map(({ type, bgImage }) => (
            <TabThumbnail key={type}>
              <div className="relative mb-5 aspect-video w-full overflow-hidden">
                <img
                  src={bgImage}
                  className="absolute w-full object-cover"
                />
                <div className="absolute bottom-[15%] left-[15%] h-20 w-20">
                  <img src={selectItem[type]?.image} />
                </div>
              </div>
            </TabThumbnail>
          ))}
        {myBirdTabOption.item.map(({ title, type }) => (
          <TabItem
            title={title}
            key={type}
          >
            <BirdItems itemType={type} />
          </TabItem>
        ))}
      </Tab>
    </>
  );
};

export default MyBirdTaps;

const myBirdTabOption: {
  thumbnail: {
    type: 'MORNING' | 'NIGHT';
    bgImage: string;
  }[];
  item: {
    type: 'MORNING' | 'NIGHT';
    title: string;
  }[];
} = {
  thumbnail: [
    {
      type: 'MORNING',
      bgImage: 'public/assets/morningShop.png'
    },
    {
      type: 'NIGHT',
      bgImage: 'public/assets/nightShop.png'
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
