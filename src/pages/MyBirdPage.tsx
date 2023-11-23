import { Suspense } from 'react';
import BirdItems from '@/MyBird/components/BirdItems';
import MyBirdThumbnail from '@/MyBird/components/MyBirdThumbnail';
import MyBirdProvider from '@/MyBird/components/MyBirdProvider';
import { Header } from '@/shared/Header';
import HeaderWallet from '@/MyBird/components/HeaderWallet';
import { Tab, TabItem, TabThumbnail } from '@/shared/Tab';

const MyBirdPage = () => {
  return (
    <MyBirdProvider>
      <Header
        prev="myPage"
        className="absolute z-10 text-white"
      >
        <Suspense>
          <HeaderWallet />
        </Suspense>
      </Header>
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
    </MyBirdProvider>
  );
};

export default MyBirdPage;

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
