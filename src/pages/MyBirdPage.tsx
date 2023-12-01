import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@/shared/Header';
import { Tab, TabItem, TabThumbnail } from '@/shared/Tab';
import BirdItems from '@/MyBird/components/BirdItems';
import MyBirdThumbnail from '@/MyBird/components/MyBirdThumbnail';
import MyBirdProvider from '@/MyBird/components/MyBirdProvider';
import HeaderWallet from '@/MyBird/components/HeaderWallet';

const MyBirdPage = () => {
  const { state } = useLocation();
  const type: 'MORNING' | 'NIGHT' = state ? state.type : 'MORNING';
  const defaultIndex = { MORNING: 0, NIGHT: 1 }[type] ?? 0;

  return (
    <MyBirdProvider>
      <Header
        prev={-1}
        className="absolute z-10 text-light-sub"
      >
        <Suspense>
          <HeaderWallet />
        </Suspense>
      </Header>
      <Tab
        itemStyle="flex-1"
        defaultIndex={defaultIndex}
      >
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
              <BirdItems type={type} />
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
      bgImage: '/assets/morningShop.png'
    },
    {
      type: 'NIGHT',
      bgImage: '/assets/nightShop.png'
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
