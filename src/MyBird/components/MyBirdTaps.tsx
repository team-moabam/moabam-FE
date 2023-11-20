import { useEffect } from 'react';
import { Suspense } from 'react';
import BirdItems from './BirdItems';
import MyBirdThumbnail from './MyBirdThumbnail';
import { Tab, TabItem, TabThumbnail } from '@/shared/Tab';

const MyBirdTaps = () => {
  useEffect(() => {
    console.log('MyBirdTaps');
  });

  return (
    <>
      <Tab itemStyle="flex-1">
        {myBirdTabOption.thumbnail.map(({ type, bgImage }) => (
          <TabThumbnail key={type}>
            <MyBirdThumbnail
              type={type}
              bgImage={bgImage}
            />
          </TabThumbnail>
        ))}
        {myBirdTabOption.item.map(({ title, type }) => (
          <TabItem
            title={title}
            key={type}
          >
            <Suspense>
              <BirdItems itemType={type} />
            </Suspense>
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
